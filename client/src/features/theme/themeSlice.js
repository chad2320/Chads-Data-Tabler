import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    saveStatus: 'idle',
    colorMode: 'dark',
    colorOptions: null,
    palette:null
}

export const saveColorOptionsToMongo = createAsyncThunk('theme/saveColorOptionsToMongo', 
    async (_,thunkAPI) => {
        console.log(thunkAPI.getState().theme.colorOptions)
        try {
            const response = await fetch(`${process.env.REACT_APP_Express_Connection}editThemeObject`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(thunkAPI.getState().theme.colorOptions)
            });
            thunkAPI.dispatch(setPalette(thunkAPI.getState().theme.colorOptions))  
              return response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue('Could Not Save To Mongo')
        }
    }
)

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
        editSingleColorOption:(state,action)=> {
            console.log(action.payload)
            let mode = action.payload.path[0]
            let color = action.payload.path[1]
            let variant = action.payload.path[2]
            let payload = action.payload.value
            state.colorOptions[mode][color][variant] = payload
        },
        reverseColorMode: (state) => {
            state.colorMode = state.colorMode === 'dark' ? 'light' : 'dark'
        }
    },
    extraReducers(builder){
        builder
            .addCase(saveColorOptionsToMongo.pending,(state)=>{
                state.saveStatus = 'pending'
            })
            .addCase(saveColorOptionsToMongo.fulfilled,(state)=>{
                state.saveStatus = 'succeeded'
            })
            .addCase(saveColorOptionsToMongo.rejected,(state,action) => {
                state.saveStatus = 'failed'
                state.error = action.error.message
            })
    }
})

export const {
    setPalette,
    reverseColorMode,
    setColorOptions,
    editSingleColorOption,
} = themeSlice.actions;

export default themeSlice.reducer;