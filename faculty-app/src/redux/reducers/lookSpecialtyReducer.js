import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function lookSpecialtyReducer(
  state = initialState.currentSpecialty,
  action
) {
  switch (action.type) {
    case actionTypes.LOOK_SPECIALTY:
      return action.payload;

    default:
      return state;
  }
}
