import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
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

export const { setProfile, setPassword, editProfile } = profile.actions;
export default profile.reducer;
