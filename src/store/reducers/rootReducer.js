import { combineReducers } from "redux";
import exampleData from "./exampleReducer";
import envData from "./environmentReducer";

const rootReducer = combineReducers({
  exampleData,
  envData,
});

export default rootReducer;
