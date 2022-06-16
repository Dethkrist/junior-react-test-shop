import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: 'USD',
  },
  reducers: {
    changeCurrency(state, action) {
      console.log(state)
      console.log(action)

      state.currency({
        currency: action.payload.currency
      });
    },
  }
});

export const {changeCurrency} = currencySlice.actions;

export default currencySlice.reducer;