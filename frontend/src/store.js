import { configureStore } from "@reduxjs/toolkit";
import activeItemReducer from "./slices/activeItemSlice";

const store =  configureStore({
    reducer: {
        activeItem: activeItemReducer,
    },
    });

export default store;

