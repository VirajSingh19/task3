import { combineReducers } from "redux";
import seed from "../data/data";

import {DELETE_ITEMS, ADD_ITEMS, SELECTED, UNSELECTED} from "../actions";


export function list(state = seed , action) {
    switch (action.type) {
        case ADD_ITEMS:
          return state;
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
      return [...state,action.item];
    case UNSELECTED:
       const newSelection = state.filter(id =>  id!==action.item);
       return [...newSelection];
    default:
      return state;
  }
}


const rootReducer = combineReducers({
    list,
    selected
});
  
  export default rootReducer;