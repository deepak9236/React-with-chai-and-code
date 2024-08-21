import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// store bn raha hai reducer store ke andar hoga
// functionallity hi reducer me hai
export const store = configureStore({
    reducer: todoReducer
})