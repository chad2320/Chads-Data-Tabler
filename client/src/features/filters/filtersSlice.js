import { createAsyncThunk,createSlice,current} from "@reduxjs/toolkit";
import { getSearchKeyValuePairs } from "./helpers/getSearchKeyValuePairs";
import { checkVisibility } from './helpers/checkVisibility'
import axios from 'axios'
import { buildFiltersList } from "./helpers/buildFiltersList";

const initialState = {
    filtersData: [],
    searchKey: null,
    visibleFilters: null,
    autoCompleteValue: [],
    filtersList: [],
    columns:[],
    status:'loading',
    error: null,
};

const url = `${process.env.REACT_APP_Express_Connection}filters`

export const getFilters = createAsyncThunk('fitlers/getFilters',
    async (_,thunkAPI) => {
        try {
            const response = await axios(url)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Error getting filters.')
        }
    }
)

const filtersSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
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
            .addCase(getFilters.pending,(state)=>{
                state.status = 'loading'
                state.tableData = []
            })
            .addCase(getFilters.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.filtersData = action.payload
                state.searchKey = getSearchKeyValuePairs(action.payload.controlsObject)
                state.visibleFilters = checkVisibility(action.payload.controlsObject)
                state.filtersList = buildFiltersList(action.payload.controlsObject)
                state.columns = Object.keys(action.payload.controlsObject).filter(item=>action.payload.controlsObject[item].isColumn).map(item=> action.payload.controlsObject[item])
            })
            .addCase(getFilters.rejected,(state,action)=>{
                state.status = 'failed'
                console.log(action.payload)
            })
    }
})

export const {
    updateVisibility,
    modifySingleFilter,
    addFilter2,
    removeFilter,
    addColumns
} = filtersSlice.actions;

export default filtersSlice.reducer;