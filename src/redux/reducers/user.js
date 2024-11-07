import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      image: "",
    },
  ],
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(state);
      state.user = [...state.user, action.payload];
    },
  },
});

export const { addUser } = user.actions;
export default user.reducer;
