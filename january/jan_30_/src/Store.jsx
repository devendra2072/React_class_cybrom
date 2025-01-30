import { configureStore } from "@reduxjs/toolkit";
import MyChange from './colorSlice'

const store = configureStore({
    reducer: {
        myColor: MyChange
    },
});

export default store;