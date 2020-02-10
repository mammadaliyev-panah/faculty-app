import * as actionTypes from "./actionTypes";

export function getStudentsSuccess(result) {
  return {
    type: actionTypes.GET_STUDENTS_SUCCESS,
    payload: result
  };
}

export function getStudents(specialtyId) {
  return function(dispatch) {
    let url = "http://localhost:3004/students";
    if (specialtyId) {
      url += "?specialtyId=" + specialtyId;
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getStudentsSuccess(result)));
  };
}

export function addNewStudent(data){
  return{
      type: actionTypes.ADD_NEW_STUDENT,
      payload: data
  }
}

export function deleteStudent(student){
  return{
    type: actionTypes.DELETE_STUDENT,
    payload: student
  }
}

export function editStudent(student){
  return{
    type: actionTypes.EDIT_STUDENT,
    payload: student
  }
}

export function updateStudent(data){
  return{
    type: actionTypes.UPDATE_STUDENT,
    data: data
  }
}

export function cancelEditing(student){
  return{
    type: actionTypes.CANCEL_EDITING,
    payload: student
  }
}

