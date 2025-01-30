import { createSlice } from "@reduxjs/toolkit";
const MyColorSlice = createSlice({
  name: "myColor",
  initialState: {
    color: "green"
  },

  //   //alternative way to define reducers
//   reducers:{
//     colorchange:(state)=>{
//         state.color="pink";
//     }
// }
  reducers: {
    colorChange:(state,actions) => {
      state.color = actions.payload
      
    }
  }
})
export const { colorChange } = MyColorSlice.actions;
export default MyColorSlice.reducer;


