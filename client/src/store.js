import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './features/modal/modalSlice'
import stringSearchReducer from './features/search/stringSearch/stringSearchSlice';

export const store = configureStore({
    reducer: {
      modal: modalReducer,
      stringSearch: stringSearchReducer,
    },
  });