import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    selectedCurrency: 
    {
      label: 'USD',
      symbol: '$'
    }
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  }
});

export const {changeCurrency} = currencySlice.actions;

export default currencySlice.reducer;