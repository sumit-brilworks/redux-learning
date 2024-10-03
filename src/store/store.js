import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CountSlice";

export const store = configureStore({
  reducer: counterReducer,
});
