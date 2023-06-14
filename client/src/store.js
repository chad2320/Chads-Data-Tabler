import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './features/modal/modalSlice'
import stringSearchReducer from './features/search/stringSearch/stringSearchSlice';
import filterSearchReducer from './features/search/filterSearch/filterSearchSlice';
import filtersReducer from './features/filters/filtersSlice';

export const store = configureStore({
    reducer: {
      modal: modalReducer,
      stringSearch: stringSearchReducer,
      filters: filtersReducer,
      filterSearch: filterSearchReducer,
    },
  });