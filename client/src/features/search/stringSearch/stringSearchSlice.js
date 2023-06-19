import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    inputData:'',
    searchData:[],
    status:'idle',
    error:null,
}

const url = `${process.env.REACT_APP_Express_Connection}search`

export const getAutoCompleteItems = createAsyncThunk('stringSearch/autoComplete', 
    async (_,thunkAPI) => {
        let x = thunkAPI.getState().stringSearch.inputData
        let y = thunkAPI.getState().filterSearch.searchKey
        try {
            let response = await axios(`${url}?inputValue=${x}&key=${y}`)
            if(response.data.length === 0){ //No Results Found
                return [{[y]:'No Results',disabled:true}]
            }
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong.')
        }
    }
)

const stringSearchSlice = createSlice({
    name:'stringSearch',
    initialState,
    reducers:{
        manageInputData:(state,action) =>{
            state.inputData = action.payload
        },
        clearStringSearch:(state) => {
            state.searchData = []
        },
        setSearchkey:(state,action) => {
            state.searchKey = action.payload
        }
    },
    extraReducers(builder){
        builder
            .addCase(getAutoCompleteItems.pending,(state)=>{
                state.status = 'loading'
                state.searchData = []
            })
            .addCase(getAutoCompleteItems.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.searchData = action.payload
            })
            .addCase(getAutoCompleteItems.rejected,(state,action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const {
    manageInputData,
    clearStringSearch,
    setSearchkey
} = stringSearchSlice.actions;

export default stringSearchSlice.reducer;