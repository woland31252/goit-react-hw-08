import { createSlice } from "@reduxjs/toolkit";

const filtersInitState = { name: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
