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

export default uiSlice;
