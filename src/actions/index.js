export const DELETE_ITEMS = "DELETE_ITEMS";
export const UNSELECTALL = "UNSELECTALL";
export const ADD_ITEMS = "ADD_ITEMS";
export const SELECTED = "SELECTED";
export const UNSELECTED = "UNSELECTED";
export const SUCCESS = "SUCCESS";
export const CLEAR_NOTIFICATON = "CLEAR_NOTIFICATON";

export function deleteItems(items) {
  const action = {
    type: DELETE_ITEMS,
    items,
  };
  return action;
}
export function unselectAll() {
  const action = {
    type: UNSELECTALL,
  };
  return action;
}

export function addItems(items) {
  const action = {
    type: ADD_ITEMS,
    items,
  };
  return action;
}


export function selectItem(item) {
  const action = {
    type: SELECTED,
    item,
  };
  return action;
}


export function unSelectItem(item) {
  const action = {
    type: UNSELECTED,
    item,
  };
  return action;
}


export function notificationMessage(item) {
  return {
    type: SUCCESS,
    item
  }
}

export function clear(item) {
  return {
    type: CLEAR_NOTIFICATON,
    item
  }
}
