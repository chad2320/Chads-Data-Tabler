import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    inputData:'',
    searchKey:'title',
    data:[],
    status:'idle',
    error:null,
}

const url = `${process.env.REACT_APP_Express_Connection}search`

export const getAutoCompleteItems = createAsyncThunk('stringSearch/autoComplete', 
async (_,thunkAPI) => {
    let x = thunkAPI.getState().stringSearch.inputData
    let y = thunkAPI.getState().stringSearch.searchKey
    try {
        let response = await axios(`${url}?inputValue=${x}&key=${y}`)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue('Something went wrong.')
    }
})

const stringSearchSlice = createSlice({
    name:'stringSearch',
    initialState,
    reducers:{
        manageInputData:(state,action) =>{
            state.inputData = action.payload
        },
        clearStringSearch:(state) => {
            state.data = []
        },
        setSearchkey:(state,action) => {
            state.searchKey = action.payload
        }
    },
    extraReducers(builder){
        builder
            .addCase(getAutoCompleteItems.pending,(state)=>{
                state.status = 'loading'
                state.data = []
            })
            .addCase(getAutoCompleteItems.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                if(action.payload.length === 0){
                    state.data = [{
                        [state.searchKey]:'No Results',
                        disabled:true
                    }]
                } else {state.data = action.payload}
                
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