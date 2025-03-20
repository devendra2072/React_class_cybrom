import { createSlice } from "@reduxjs/toolkit";
const  counterSlice=createSlice({
   name:"mycolor",
   initialState:{
      color:"green"
   },
   reducers:{
      ChangeColor:(state,actions)=>{
         state.color=actions.payload;
      }
   }
})
export const {ChangeColor}=counterSlice.actions;
export default counterSlice.reducer;