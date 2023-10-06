import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeNameFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeNameFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
