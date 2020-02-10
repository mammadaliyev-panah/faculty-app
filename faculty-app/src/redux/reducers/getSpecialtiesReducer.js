import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function getSpecialtiesReducer(
  state = initialState.specialties,
  action
) {
  switch (action.type) {
    case actionTypes.GET_SPECIALTIES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
