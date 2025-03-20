import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: "myslice",
    initialState: {
        task: [],
    },
    reducers:{
        addTask: (state, action) => {
            state.task.push(action.payload);
        },
        removeTask: (state, action) => {
             state.task=state.task.filter(item=>item.id!=action.payload.id)
            // state.task=state.task.filter(function(key){
            //     if (key.id!=action.payload.id)
            //     { 
            //         return true;
            //     }
            //     else{
            //         return false;
            //     }
            // })
            // console.log(action.payload);
           
        }
    }
});
export const {addTask, removeTask} = todoSlice.actions;

export default todoSlice.reducer;