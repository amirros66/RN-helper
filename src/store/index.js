import { configureStore } from "@reduxjs/toolkit";
import toDoListSliceReducer from "./toDoList/toDoListSlice";
import authReducer from "./Auth/slice";

const store = configureStore({
  reducer: {
    // calculator: calculatorSliceReducer,
    auth: authReducer,
    toDoList: toDoListSliceReducer,
  },
});

export default store;
