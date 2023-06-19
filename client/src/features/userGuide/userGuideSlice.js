import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enabled: true,
}

const userGuideSlice = createSlice({
    name:'userGuide',
    initialState,
    reducers:{
        toggleUserGuideEnabled: (state) => {
            localStorage.setItem("guide", JSON.stringify(!state.enabled))
            state.enabled = !state.enabled
        },
        intializeEnabled: (state) => {
            let temp = JSON.parse(localStorage.getItem("guide"))
            temp === null ? state.enabled = true : state.enabled = temp
        }
    }
})

export const {
    toggleUserGuideEnabled,
    intializeEnabled,
} = userGuideSlice.actions;

export default userGuideSlice.reducer;