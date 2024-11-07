import { combineReducers } from "@reduxjs/toolkit";
import profile from "./profile";
import user from "./user";
import auth from "./auth";
// import register from "./register";

const reducer = combineReducers({
  profile,
  user,
  auth,
  //   register,
});

export default reducer;
