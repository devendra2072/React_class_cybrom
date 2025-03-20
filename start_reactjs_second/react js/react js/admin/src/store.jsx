import { configureStore } from "@reduxjs/toolkit"
import myReducer from "./CounterSlice";
const store=configureStore({
   reducer:{
      mycolor:myReducer
   }
})
export default store;