import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { setupSearchParameters } from "./helpers/setupSearchParameters";
import { identicalRequestCheck } from "./helpers/identicalRequestCheck";
import { combineFiltersWithControls } from "./helpers/combineFiltersWithControls";

const initialState = {
    tableData:[],
    previousSearch:{},
    searchCountTotal:null,
    controls:{
        limit:10,
        page: 0,
        sort1: false,
        sort2: false,
    },
    status:'idle',
    error:null,
}

const url = `${process.env.REACT_APP_Express_Connection}tabledata`

export const getTableData = createAsyncThunk('filterSearch/getTableData',
async (_,thunkAPI)=>{
    try {
        let parameters = setupSearchParameters(thunkAPI.getState().filters.filtersData.controlsObject)
        let combinedSearch = combineFiltersWithControls(parameters,thunkAPI.getState().filterSearch.controls)
        let identicalSearch = identicalRequestCheck(combinedSearch,thunkAPI.getState().filterSearch.previousSearch)
        if(!identicalSearch){
            const theSearch = `?searchParams=${encodeURIComponent(JSON.stringify(combinedSearch))}`
            const response = await axios(`${url}${theSearch}`)
            response.data.tableData[0].thisSearch = combinedSearch
            return response.data.tableData[0]
        } else {
            return thunkAPI.rejectWithValue('Duplicate Search. Change Filter Or Control Parameters.')
        }
    } catch (error) {
        return thunkAPI.rejectWithValue('Error getting filters.')
    }
})

const filterSearchSlice = createSlice({
    name: 'filterSearch',
    initialState,
    reducers:{
        modifyControls: (state, action) => {
            const { key, value } = action.payload;
            state.controls[key] = value;
        },
        
    },
    extraReducers(builder){
        builder
            .addCase(getTableData.pending,(state)=>{
                state.status = 'loading'
                //state.tableData = []
            })
            .addCase(getTableData.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.tableData = action.payload.data
                state.searchCountTotal = action.payload.count[0].Total
                state.previousSearch = action.payload.thisSearch
            })
            .addCase(getTableData.rejected,(state,action)=>{
                state.status = 'failed'
                console.log(action.payload)
            })
    }
})

export const {
    modifyControls,
} = filterSearchSlice.actions;

export default filterSearchSlice.reducer;