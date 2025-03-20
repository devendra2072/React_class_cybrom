import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./todoSlice";

const Store = configureStore(
    {
        reducer:{
            myslice: myreducer,
        }
    }
)

export default Store;