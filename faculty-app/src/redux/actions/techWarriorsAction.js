import * as actionTypes from "../actions/actionTypes";

export function addToTechWarriors(member){
   return{
       type: actionTypes.ADD_TO_TECHWARRIORS,
       payload: member
   } 
}

export function removeFromTechWarriors(member){
    return{
        type: actionTypes.REMOVE_FROM_TECHWARRIORS,
        payload: member
    }
}