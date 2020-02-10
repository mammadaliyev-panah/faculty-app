import { combineReducers } from "redux";
import getSpecialtiesReducer from "./getSpecialtiesReducer"
import lookSpecialtyReducer from "./lookSpecialtyReducer"
import getStudentsReducer from "./getStudentsReducer"
import techWarriorsReducer from "./techWarriorsReducer"
import newStudentReducer from "./newStudentReducer";
var rootReducer = combineReducers({
  getSpecialtiesReducer,
  lookSpecialtyReducer,
  getStudentsReducer,
  techWarriorsReducer,
  newStudentReducer
});

export default rootReducer;
