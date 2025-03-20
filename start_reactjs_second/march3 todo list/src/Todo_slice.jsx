import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
    name: "todoSlice",
    initialState: {
        work: []
    },
    reducers: {
        add: (state, { payload }) => {
            state.work.push(payload);
        },
        remove: (state, { payload }) => {
            state.work.splice(payload, 1)
        },
        save: (state, { payload }) => {
            state.work[payload.id].work = payload.value
        },
        workStatus: (state, { payload  }) => {
            state.work[payload.id].workStatus = payload.toggle
        }
    }
});
export const { add, remove, save, workStatus } = Slice.actions;
export default Slice.reducer;

