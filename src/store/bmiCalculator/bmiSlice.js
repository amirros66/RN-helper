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
      state.height = action.payload === "" ? "" : parseFloat(action.payload);
    },

    updateWeight: (state, action) => {
      state.weight = action.payload === "" ? "" : parseFloat(action.payload);
    },
    calculateBMI: (state) => {
      if (!isNaN(state.height) && !isNaN(state.weight)) {
        const heightInMeters = state.height / 100;
        state.bmi = (state.weight / (heightInMeters * heightInMeters)).toFixed(
          2
        );
      } else {
        state.bmi = null;
      }
    },
  },
});

export const { updateHeight, updateWeight, calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
