import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { careIsVisible: false },
  reducers: {
    toggle(state) {
      state.careIsVisible = !state.careIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
