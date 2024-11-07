import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
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

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      // console.log(state);
      state.user = action.payload;
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

export const { setProfile, editUser } = profile.actions;
export default profile.reducer;
