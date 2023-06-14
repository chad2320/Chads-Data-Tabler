import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    tableData:[],
    status:'idle',
    error:null,
}

const filterSearchSlice = createSlice({
    name: 'filterSearch',
    initialState,
    reducers:{

    }
})

export default filterSearchSlice.reducer;