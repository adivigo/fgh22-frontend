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
      state.data = action.payload;
    },
    editProfile: (state, action) => {
      state.data.firstName = action.payload.firstName;
      state.data.lastName = action.payload.lastName;
      state.data.phoneNumber = action.payload.phoneNumber;
      state.data.email = action.payload.email;
      if (action.payload.password !== "") {
        state.data.password = action.payload.password;
      }
      state.data.image = action.payload.image;
    },
  },
});

export const { setProfile, editProfile } = profile.actions;
export default profile.reducer;
