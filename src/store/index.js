import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from './currencySlice'
import loadingReducer from './loadingSlice'

export default configureStore({
  reducer: {
    currency: currencyReducer,
    loading: loadingReducer,
  }
});
