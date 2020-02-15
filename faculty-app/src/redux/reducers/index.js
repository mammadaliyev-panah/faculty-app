import { combineReducers } from "redux";
import getSpecialtiesReducer from "./getSpecialtiesReducer"
import lookSpecialtyReducer from "./lookSpecialtyReducer"
import getStudentsReducer from "./getStudentsReducer"
import techWarriorsReducer from "./techWarriorsReducer"
var rootReducer = combineReducers({
  getSpecialtiesReducer,
  lookSpecialtyReducer,
  getStudentsReducer,
  techWarriorsReducer
});

export default rootReducer;
