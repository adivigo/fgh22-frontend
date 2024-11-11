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
      state.user = [...state.user, action.payload];
    },
    editUser: (state, action) => {
      const email = action.payload.email;
      const foundIndex = state.user.findIndex((user) => user.email === email);
      console.log(email);
      if (foundIndex !== -1) {
        state.user[foundIndex].firstName = action.payload.firstName;
        state.user[foundIndex].lastName = action.payload.lastName;
        state.user[foundIndex].phoneNumber = action.payload.phoneNumber;
        state.user[foundIndex].email = action.payload.email;
        if (action.payload.password !== "") {
          state.user[foundIndex].password = action.payload.password;
        }
      }
    },
  },
});

export const { addUser, editUser } = user.actions;
export default user.reducer;
