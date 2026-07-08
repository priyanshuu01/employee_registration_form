import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    formData: {}
  },
  reducers: {
    saveFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    clearForm: (state) => {
      state.formData = {};
    }
  }
});

export const { saveFormData, clearForm } = employeeSlice.actions;
export default employeeSlice.reducer;