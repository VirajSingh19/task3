import { combineReducers } from "redux";
import seed from "../data/data";

import {DELETE_ITEMS, ADD_ITEMS, SELECTED, UNSELECTED, FORM_TYPE} from "../actions";
import { stat } from "fs";


export function list(state = seed , action) {
    switch (action.type) {
        case ADD_ITEMS:
          action.items.id = state[state.length-1].id+1; 
          return [...state, action.items ]; 
        case DELETE_ITEMS:
          const newState = [];
          for(let item of state) {
            if(!action.items.find(deleteId=> item.id===deleteId)){
              newState.push(item);
            }
          }
          return [...newState];
        default:
          return state;
      }
}


export function selected(state = [] , action) {
  switch (action.type) {
    case SELECTED:
      console.log(action.item, 'is selected');
      return [...state,action.item];
    case UNSELECTED:
       const newSelection = state.filter(id =>  id!==action.item);
      console.log(action.item, 'is unselected');
       return [...newSelection];
    default:
      return state;
  }
}

export function formType(state='', action) {
  switch(action.type) {
    case FORM_TYPE:
      return action.item;
    default:
      return state;
  }
}


const rootReducer = combineReducers({
    list,
    selected,
    formType
});
  
  export default rootReducer;