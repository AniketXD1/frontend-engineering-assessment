import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";

const appStore = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export default appStore;
