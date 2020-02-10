import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

function newStudentReducer(state = initialState.newStudents, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_STUDENT:
      let stateCopy = [...state, action.payload];

      return stateCopy;
    case actionTypes.EDIT_STUDENT:
      return state.map(newStudent =>
        newStudent.id === action.payload.id
          ? { ...newStudent, editing: !newStudent.editing }
          : newStudent
      );

    case actionTypes.UPDATE_STUDENT:
      return state.map(newStudent => {
        if (newStudent.id === action.id) {
          return {
            ...newStudent,
            studentName: action.data.newStudentName,
            specialtyName: action.data.newSpecialtyName,
            groupNumber: action.data.newGroupNumber,
            educationYear: action.data.newEducationYear,
            specialtyId: action.data.newSpecialtyId,
            editing: false
          };
        } else return newStudent;
      });

    case actionTypes.ADD_TO_TECHWARRIORS:
      return state.map(newStudent => {
        if (newStudent.id === action.payload.id) {
          return {
            ...newStudent,
            chosen: true
          };
        } else {
          return newStudent;
        }
      });
    case actionTypes.REMOVE_FROM_TECHWARRIORS:
      return state.map(newStudent => {
        if (newStudent.id === action.payload.id) {
          return {
            ...newStudent,
            chosen: false
          };
        } else {
          return newStudent;
        }
      });

    case actionTypes.CANCEL_EDITING:
      return state.map(student => {
        if (student.id === action.id) {
          return {
            ...student,
            editing: false
          };
        } else {
          return student;
        }
      });
    
      case actionTypes.DELETE_STUDENT:
        return state.filter(newStudent => newStudent.id !== action.payload.id);

    default:
      return state;
  }
}
export default newStudentReducer;
