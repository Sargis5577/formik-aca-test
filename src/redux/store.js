import {configureStore} from "@reduxjs/toolkit";
import moduleReducer from './slices/modalSlice'

const store = configureStore({
    reducer: {
        modal:moduleReducer,
    }
})

export default store