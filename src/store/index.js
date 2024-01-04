import { configureStore } from "@reduxjs/toolkit";
import bmiSliceReducer from "./bmiCalculator/bmiSlice";
import calculatorSliceReducer from "./calculator/calculatorSlice";
import toDoListSliceReducer from "./toDoList/toDoListSlice";

const store = configureStore({
  reducer: {
    bmiCalculator: bmiSliceReducer,
    calculator: calculatorSliceReducer,
    toDoList: toDoListSliceReducer,
  },
});

export default store;
