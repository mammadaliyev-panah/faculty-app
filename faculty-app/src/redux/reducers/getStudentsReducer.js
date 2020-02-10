import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function getStudentsReducer(
  state = initialState.students,
  action
) {
  switch (action.type) {
    case actionTypes.GET_STUDENTS_SUCCESS:
      return action.payload.map(student => ({
        ...student,
        editing: false,
        chosen: false
      }));
    // case actionTypes.ADD_NEW_STUDENT:
    //   return [...state, action.payload];
    case actionTypes.DELETE_STUDENT:
      return state.filter(student => student.id !== action.payload.id);
    case actionTypes.EDIT_STUDENT:
      return state.map(student =>
        student.id === action.payload.id
          ? { ...student, editing: !student.editing }
          : student
      );

    case actionTypes.UPDATE_STUDENT:
      return state.map(student => {
        if (student.id === action.id) {
          return {
            ...student,
            studentName: action.data.newStudentName,
            specialtyName: action.data.newSpecialtyName,
            groupNumber: action.data.newGroupNumber,
            educationYear: action.data.newEducationYear,
            specialtyId: action.data.newSpecialtyId,
            editing: false
          };
          
        } else return student;
      });
    case actionTypes.ADD_TO_TECHWARRIORS:
      return state.map(student => {
        if (student.id === action.payload.id) {
          return {
            ...student,
            chosen: true
          };
        } else {
          return student;
        }
      });
    case actionTypes.REMOVE_FROM_TECHWARRIORS:
      return state.map(student => {
        if (student.id === action.payload.id) {
          return {
            ...student,
            chosen: false
          };
        } else {
          return student;
        }
      });

    case actionTypes.CANCEL_EDITING:
      return state.map(student => {
        if(student.id === action.id){
          return{
            ...student,
            editing: false
          }
        } else {
          return student
        }
      })


    default:
      return state;
  }
}
