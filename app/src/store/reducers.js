import { combineReducers } from "redux";
import skills from "./skills/reducer";
import user from "./user/reducer";
import find from "./find/reducer";

export default combineReducers({
  user
});
