import { createSlice } from "@reduxjs/toolkit";
const ColorSlice = createSlice({
    name:"mycolor",
    initialState:{
        color:"aqua"
    },
    reducers:{
       changeColor:(state)=>{
           state.color="gray";
       }
    }
})

export const { changeColor } = ColorSlice.actions;

export default ColorSlice.reducer;