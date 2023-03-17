import { combineReducers } from "redux";
import demoSlice from "./demo";

const rootReducer = combineReducers({
  demo: demoSlice,
});

export default rootReducer;
