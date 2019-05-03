import { Action } from "redux";

// actionstatements
export const ADD_FAVORITE = "add_favorite";
export const REMOVE_FAVORITE = "remove_favorite";
export const GET_PAGES = "get_pages";
export const GET_COLLECTION = "get_collection";
export const GET_COLLECTION_STARS= "get_collection_stars";
export const GET_VENDORMOMENTS = "get_vendormoments";
export const GET_CONTACTS = "get_contacts";

export interface IAddFavoriteAction extends Action {
  type: "add_favorite";
  urlFavorite: string;
}

export interface IRemoveFavoriteAction extends Action {
  type: "remove_favorite";
  urlFavorite: string;
}

export interface IGetCollectionStars extends Action {
  type: "get_collection_stars";
  data: {
    stars: number,
    url: string,
  }[]
}

export type AppActions = IAddFavoriteAction |
                          IRemoveFavoriteAction |
                          IGetCollectionStars;