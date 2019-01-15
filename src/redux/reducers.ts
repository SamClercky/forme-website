import {
  initialState,
  IAppState,
  ICollectionItem,
  IVendorMoment,
  IWebpage,
  IContactInfo
} from "./initialState";
import { combineReducers, Reducer } from "redux";
import { AppActions } from "./actions";

const collection: Reducer<ICollectionItem[], AppActions> = (
  state = initialState.collection,
  action
) => {
  let result = [...state]; // copy currState
  switch (action.type) {
    case "add_favorite":
      result = result.map(e => {
        if (e.url == action.urlFavorite) {
          return {
            ...e,
            stared: true,
            stars: e.stars + 1,
          } as ICollectionItem;
        } else {
          return e;
        }
      });
      break;
    case "remove_favorite":
      result = result.map(e => {
        if (e.url == action.urlFavorite) {
          return {
            ...e,
            stared: false,
            stars: e.stars - 1,
          } as ICollectionItem;
        } else {
          return e;
        }
      });
      break;
  }
  // console.log({
  //   result: result,
  //   state: state,
  //   action: action
  // });
  return result;
};

const contact: Reducer<IContactInfo[], AppActions> = (
  state = initialState.contact,
  action
) => {
  return state; // nothing to change yet
};

const paginas: Reducer<IWebpage[], AppActions> = (
  state = initialState.paginas,
  action
) => {
  return state; // nothing to change yet
};

const vendorMoments: Reducer<IVendorMoment[], AppActions> = (
  state = initialState.vendorMoments,
  action
) => {
  return state; // nothing to change yet
};

export const globalReducer = combineReducers<IAppState, AppActions>({
  collection: collection,
  contact: contact,
  paginas: paginas,
  vendorMoments: vendorMoments
});
