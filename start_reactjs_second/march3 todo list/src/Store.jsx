import { configureStore } from "@reduxjs/toolkit";
import Slice from './Todo_slice'
const store = configureStore({
    reducer:{
        todoSlice:Slice
    }
});
export default store;