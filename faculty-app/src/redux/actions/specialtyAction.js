import * as actionTypes from "./actionTypes";
export function getSpecialtiesSuccess(result) {
  return {
    type: actionTypes.GET_SPECIALTIES_SUCCESS,
    payload: result
  };
}

export function lookSpecialty(specialtyItem){
  return{
    type: actionTypes.LOOK_SPECIALTY,
    payload: specialtyItem
  }
}

export function getSpecialties() {
  return function(dispatch) {
    let url = "http://localhost:3004/specialties";
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getSpecialtiesSuccess(result)));
  };
}
