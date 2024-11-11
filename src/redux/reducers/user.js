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
      state.data[foundIndex].firstName = action.payload.firstName;
      state.data[foundIndex].lastName = action.payload.lastName;
      state.data[foundIndex].phoneNumber = action.payload.phoneNumber;
      state.data[foundIndex].email = action.payload.email;
      if (action.payload.password !== "") {
        state.data[foundIndex].password = action.payload.password;
      }
      state.data[foundIndex].image = action.payload.image;
    },
  },
});

export const { addUser, editUser } = user.actions;
export default user.reducer;
