import { combineReducers } from "@reduxjs/toolkit";
import profile from "./profile";
import user from "./user";
import auth from "./auth";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const authConfig = {
  key: "auth",
  storage,
};

const userConfig = {
  key: "user",
  storage,
};

const reducer = combineReducers({
  profile,
  user: persistReducer(userConfig, user),
  auth: persistReducer(authConfig, auth),
});

export default reducer;
