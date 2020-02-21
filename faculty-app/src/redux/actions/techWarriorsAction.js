import * as actionTypes from "../actions/actionTypes";

export function getTechWarriors(result){
    return{
        type: actionTypes.GET_TECHWARRIORS_SUCCESS,
        payload: result
    }
}

export function getTechWarriorsSuccess() {
  return function(dispatch) {
    let url = "http://localhost:3004/techwarriors";
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getTechWarriors(result)));
  };
}

export function addToTechWarriors(member) {
  return {
    type: actionTypes.ADD_TO_TECHWARRIORS,
    payload: member
  };
}

export function removeFromTechWarriors(member) {
  return {
    type: actionTypes.REMOVE_FROM_TECHWARRIORS,
    payload: member
  };
}
