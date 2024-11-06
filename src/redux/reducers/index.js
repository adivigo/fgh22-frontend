import { combineReducers } from "@reduxjs/toolkit";
import profile from "./profile";
// import register from "./register";

const reducer = combineReducers({
  profile,
  //   register,
});

export default reducer;
