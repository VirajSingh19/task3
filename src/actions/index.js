export const DELETE_ITEMS = "DELETE_ITEMS";
export const ADD_ITEMS = "ADD_ITEMS";
export const SELECTED = "SELECTED";
export const UNSELECTED = "UNSELECTED";
export const FORM_TYPE = "FORM_TYPE";

export function deleteItems(items) {
  const action = {
    type: DELETE_ITEMS,
    items,
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

export function setFormType(item) {
  const action = {
    type: FORM_TYPE,
    item,
  };
  return action;
}


