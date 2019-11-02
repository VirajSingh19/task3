import { combineReducers } from "redux";
import seed from "../data/data";

import {DELETE_ITEMS, ADD_ITEMS, SELECTED, UNSELECTED} from "../actions";

export function list(state = seed , action) {
    switch (action.type) {
        case ADD_ITEMS:
          console.log('item to be added', action.items, action.items.id);

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
      return [...state,action.item];
    case UNSELECTED:
       const newSelection = state.filter(id =>  id!==action.item);
       return [...newSelection];
    case DELETE_ITEMS:
      return [];
    default:
      return state;
  }
}


const rootReducer = combineReducers({
    list,
    selected,
});
  
  export default rootReducer;