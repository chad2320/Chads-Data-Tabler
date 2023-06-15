import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    colorMode: 'dark',
    colorOptions: null,
    palette:null
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setPalette: (state,action) => {
            state.palette = action.payload
        },
        setColorOptions:(state,action) => {
            state.colorOptions = action.payload
        },
        reverseColorMode: (state) => {
            state.colorMode = state.colorMode === 'dark' ? 'light' : 'dark'
        }
    }
})

export const {
    setPalette,
    reverseColorMode,
    setColorOptions
} = themeSlice.actions;

export default themeSlice.reducer;