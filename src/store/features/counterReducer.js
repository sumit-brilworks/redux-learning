import { createAction, createReducer } from "@reduxjs/toolkit";

export const incrementAction = createAction("counter/increment");
console.log("CreateAction's object", incrementAction);

export const decrementAction = createAction("counter/decrement");
console.log("CreateAction's object", decrementAction);

export const incrementByCount = createAction("counter/custom");

const counterReducer = createReducer(0, (builder) => {
  builder.addCase(incrementAction, (state, action) => {
    console.log("Inside the reducer", state, action);
    state++;
    return state;
  });
  builder.addCase(decrementAction, (state, action) => {
    console.log("Inside the reducer", state, action);
    state--;
    return state;
  });
  builder.addCase(incrementByCount, (state, action) => {
    console.log("Inside the reducer", state, action);
    state += action.payload;
    return state;
  });
  builder.addDefaultCase((state, action) => {
    return state;
  });
});

export default counterReducer;
