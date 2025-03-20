import { createSlice } from "@reduxjs/toolkit";
const TodoSlice=createSlice({
   name:"myTodo",
   initialState:{
      task:[]
   },
   reducers:{
      Addtask:(state,actions)=>{
         state.task.push(actions.payload);
      },
      deletetask:(state,actions)=>{
         state.task=state.task.filter(key=> key.id!=actions.payload.id)
      },
      taskComplete:(state,actions)=>{
         for(var i=0; i<state.task.length; i++){
            if(state.task[i].id==actions.payload.id){
               state.task[i].status="complete";
            }
         }
      },
      taskIncomplete:(state,actions)=>{
         for(var i=0; i<state.task.length; i++){
            if(state.task[i].id==actions.payload.id){
               state.task[i].status="incomplete";
            }
         }
      }

   }
})
export const {Addtask,deletetask,taskComplete,taskIncomplete}= TodoSlice.actions;
export default TodoSlice.reducer; 
