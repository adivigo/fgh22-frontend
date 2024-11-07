import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { loginAction } = auth.actions;
export default auth.reducer;
