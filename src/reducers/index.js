import { combineReducers } from "redux";
import seed from "../data/data";

import {DELETE_ITEMS, ADD_ITEMS, SELECTED, UNSELECTED, SUCCESS, UNSELECTALL, CLEAR_NOTIFICATON} from "../actions";

export function list(state = seed , action) {
    switch (action.type) {
        case ADD_ITEMS:
          if(action.items.id) {
            // if item is edited
            for(let i=0;i<state.length;i++) {
              if(state[i].id===action.items.id) {
                state[i] = action.items;
                return [...state];
              }
            }
          }
          // else new id is to be created
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
    case ADD_ITEMS: 
      return [];
      case SELECTED:
      return [...state,action.item];
    case UNSELECTED:
       const newSelection = state.filter(id =>  id!==action.item);
       return [...newSelection];
    case UNSELECTALL:
      return [];
    case DELETE_ITEMS:
      return [];
    default:
      return state;
  }
}


export function notification(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return action.item;
    case CLEAR_NOTIFICATON:
      return '';
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    list,
    selected,
    notification
});
  
  export default rootReducer;