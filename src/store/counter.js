import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isShow: true }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase(state) {
            state.counter++;
        },
        increaseBy5(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrease(state) {
            state.counter--;
        },
        reset(state) {
            state.counter = 0;
        },
        toggle(state) {
            state.isShow = !state.isShow;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice;