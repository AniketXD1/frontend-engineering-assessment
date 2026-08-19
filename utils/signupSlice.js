import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    email: null,
    name: null,
    dateOfBirth: null,
    gender: null,
    country: null,
    state: null,
    city: null,
    role: null,
    category: null,
    source: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setName: (state, action) => {
      state.name = action.payload;
    },

    setDataOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },

    setGender: (state, action) => {
      state.gender = action.payload;
    },

    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },

    setCity: (state, action) => {
      state.city = action.payload;
    },

    setRole: (state, action) => {
      state.role = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
  },
});

export const {
  setEmail,
  setName,
  setDataOfBirth,
  setGender,
  setCountry,
  setState,
  setCity,
  setRole,
  setCategory,
  setSource,
} = signupSlice.actions;
export default signupSlice.reducer;
