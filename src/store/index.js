import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "@/features/todo/todoSlce.js"

export const store = configureStore({
    reducer:todoReducer
});