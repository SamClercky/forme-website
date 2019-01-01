import {
  initialState,
  IAppState,
  ICollectionItem,
  IVendorMoment,
  IWebpage,
  IContactInfo
} from "./initialState";
import { IAction, ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";
import { combineReducers, Reducer, Action } from "redux";

const collection: Reducer<ICollectionItem[], Action<IAction>> = (
  state = initialState.collection,
  action
) => {
  let result = state;
  switch (action.type.action) {
    case ADD_FAVORITE:
      result.map(e => {
        if (e.url == action.type.arg) {
          return {
            stared: true,
            start: e.stars + 1,
            ...e
          } as ICollectionItem;
        } else {
          return e;
        }
      });
      break;
    case REMOVE_FAVORITE:
      result.map(e => {
        if (e.url == action.type.arg) {
          return {
            stared: false,
            start: e.stars - 1,
            ...e
          } as ICollectionItem;
        } else {
          return e;
        }
      });
      break;
  }
  return result;
};

const contact: Reducer<IContactInfo[], Action<IAction>> = (
  state = initialState.contact,
  action
) => {
  return state; // nothing to change yet
};

const paginas: Reducer<IWebpage[], Action<IAction>> = (
  state = initialState.paginas,
  action
) => {
  return state; // nothing to change yet
};

const vendorMoments: Reducer<IVendorMoment[], Action<IAction>> = (
  state = initialState.vendorMoments,
  action
) => {
  return state; // nothinh to change yet
};

export const globalReducer = combineReducers<IAppState>({
  collection: collection,
  contact: contact,
  paginas: paginas,
  vendorMoments: vendorMoments
});
