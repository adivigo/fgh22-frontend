import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // console.log(state);
      state.token = action.payload;
    },
  },
});

export const { login } = auth.actions;
export default auth.reducer;
