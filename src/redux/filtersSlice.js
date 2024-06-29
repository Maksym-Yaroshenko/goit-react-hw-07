import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      //   state.filters.name.toLowerCase().includes(action.payload.toLowerCase());
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
