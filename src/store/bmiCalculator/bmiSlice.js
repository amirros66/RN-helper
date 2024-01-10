import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: "",
  weight: "",
  bmi: null,
};

export const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    updateHeight: (state, action) => {
      state.height = action.payload;
    },
    updateWeight: (state, action) => {
      state.weight = action.payload;
    },
    calculateBMI: (state) => {
      const heightInMeters = state.height / 100;
      state.bmi = (state.weight / (heightInMeters * heightInMeters)).toFixed(2);
      // what is this bit doing?
    },
  },
});

export const { updateHeight, updateWeight, calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
