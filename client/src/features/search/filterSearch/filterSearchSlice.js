import { createAsyncThunk, createSlice ,current } from "@reduxjs/toolkit";
import axios from 'axios'
import { setupSearchParameters } from "./helpers/setupSearchParameters";
import { identicalRequestCheck } from "./helpers/identicalRequestCheck";
import { combineFiltersWithControls } from "./helpers/combineFiltersWithControls";
import { getSearchKeyValuePairs } from './helpers/getSearchKeyValuePairs'
import { checkVisibility } from './helpers/checkVisibility'
import { buildFiltersList } from "./helpers/buildFiltersList";
import { setPalette , setColorOptions } from "../../theme/themeSlice";

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
    filtersData: [],
    searchKey: null,
    visibleFilters: null,
    autoCompleteValue: [],
    filtersList: [],
    columns:[],
    filterStatus:'loading',
    filterError: null,
}

const url = `${process.env.REACT_APP_Express_Connection}tabledata`

export const getTableData = createAsyncThunk('filterSearch/getTableData',
async (_,thunkAPI)=>{
    try {
        let parameters = setupSearchParameters(thunkAPI.getState().filterSearch.autoCompleteValue,thunkAPI.getState().filterSearch.filtersData.controlsObject)
        console.log(parameters)
        let combinedSearch = combineFiltersWithControls(parameters,thunkAPI.getState().filterSearch.controls)
        let identicalSearch = identicalRequestCheck(combinedSearch,thunkAPI.getState().filterSearch.previousSearch)
        if(!identicalSearch){
            const theSearch = `?searchParams=${encodeURIComponent(JSON.stringify(combinedSearch))}`
            const response = await axios(`${url}${theSearch}`)
            console.log(response.data.tableData[0])
            if(response.data.tableData[0].data.length === 0){
                return thunkAPI.rejectWithValue('No Results')
            }
            response.data.tableData[0].thisSearch = combinedSearch
            return response.data.tableData[0]
        } else {
            return thunkAPI.rejectWithValue('Duplicate Search. Change Filter Or Control Parameters.')
        }
    } catch (error) {
        return thunkAPI.rejectWithValue('Error getting filters.')
    }
})

const filterUrl = `${process.env.REACT_APP_Express_Connection}filters`

export const getFilters = createAsyncThunk('filters/getFilters',
    async (_,thunkAPI) => {
        try {
            const response = await axios(filterUrl)
            thunkAPI.dispatch(setPalette(response.data.theme))
            thunkAPI.dispatch(setColorOptions(response.data.theme))
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Error getting filters.')
        }
    }
)

const filterSearchSlice = createSlice({
    name: 'filterSearch',
    initialState,
    reducers:{
        modifyControls: (state, action) => {
            const { key, value } = action.payload;
            state.controls[key] = value;
        },
        updateVisibility:(state) =>{
            state.visibleFilters = checkVisibility(
                current(state.filtersData.controlsObject)
            )
        },
        modifySingleFilter: (state, action) => {
            const { id, key, value } = action.payload;
            state.filtersData.controlsObject[id][key] = value;
        },
        addFilter2: (state,action) => {
            state.autoCompleteValue = action.payload
        },
        removeFilter:(state,action) => {
            state.autoCompleteValue = state.autoCompleteValue.filter(
                item => item.path !== action.payload
            )
        },
        addColumns:(state,action) => {
            state.columns = action.payload
        }
        
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
                console.log(action.payload)
                console.log(state.tableData.length)
                if(action.payload === 'No Results' && state.tableData.length === 0){
                    state.status = 'No Results'
                    console.log(action.payload)
                } else {
                    state.status = 'failed'
                    console.log(action.payload)
                }
            })
            .addCase(getFilters.pending,(state)=>{
                state.filterStatus = 'loading'
                state.tableData = []
            })
            .addCase(getFilters.fulfilled,(state,action)=>{
                state.filterStatus = 'succeeded'
                state.filtersData = action.payload
                state.searchKey = getSearchKeyValuePairs(action.payload.controlsObject)
                state.visibleFilters = checkVisibility(action.payload.controlsObject)
                state.filtersList = buildFiltersList(action.payload.controlsObject)
                state.columns = Object.keys(action.payload.controlsObject).filter(item=>action.payload.controlsObject[item].isColumn).map(item=> action.payload.controlsObject[item])
            })
            .addCase(getFilters.rejected,(state,action)=>{
                state.filterStatus = 'failed'
                console.log(action.payload)
            })
    }
})

export const {
    modifyControls,
    updateVisibility,
    modifySingleFilter,
    addFilter2,
    removeFilter,
    addColumns
} = filterSearchSlice.actions;

export default filterSearchSlice.reducer;