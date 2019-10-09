import * as types from "./actions";

export function addFeature() {
  return {
    type: types.ADD_FEATURE
  };
}

export function removeFeature() {
  return {
    type: types.REMOVE_FEATURE
  };
}
