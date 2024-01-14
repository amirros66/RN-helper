import { configureStore } from "@reduxjs/toolkit";
import calculatorSliceReducer from "./calculator/calculatorSlice";
import toDoListSliceReducer from "./toDoList/toDoListSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorSliceReducer,
    toDoList: toDoListSliceReducer,
  },
});

export default store;
