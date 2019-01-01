// actioninterface
export interface IAction {
    action: string,
    arg?: string
}

// actionstatements
export const ADD_FAVORITE = "add_favorite"
export const REMOVE_FAVORITE = "remove_favorite"
export const GET_PAGES = "get_pages"
export const GET_COLLECTION = "get_collection"
export const GET_VENDORMOMENTS = "get_vendormoments"
export const GET_CONTACTS = "get_contacts"

// actionfunctions
export function add_favorite(url: string): IAction { 
    return {
        action: ADD_FAVORITE,
        arg: url
    }
}

export function remove_favorite(url: string): IAction {
    return {
        action: REMOVE_FAVORITE,
        arg: url
    }
}

export function get_pages(): IAction {
    return {
        action: GET_PAGES,
    }
}

export function get_collection(): IAction {
    return {
        action: GET_COLLECTION
    }
}

export function get_vendormoments(): IAction {
    return {
        action: GET_VENDORMOMENTS,
    }
}

export function get_contacts(): IAction {
    return {
        action: GET_CONTACTS
    }
}