import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function techWarriors(
  state = initialState.techWarriors,
  action
) {
  switch (action.type) {
    case actionTypes.ADD_TO_TECHWARRIORS:
      var addedStudent = state.find(c => c.id === action.payload.id);
      if (addedStudent) {
        var newState = state.map(member => {
          if (member.id === action.payload.id) {
            return Object.assign({}, addedStudent);
          }
          return member;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }

    case actionTypes.REMOVE_FROM_TECHWARRIORS:
      var removedStudent = state.filter(r => r.id !== action.payload.id);
      return removedStudent;
      
    default:
      return state;
  }
}


