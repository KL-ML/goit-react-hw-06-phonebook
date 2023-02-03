import { FILTER, SET_CONTACTS, DELETE_CONTACTS } from "./contacts.types";

export const filterInputAction = payload => ({ type: FILTER, payload });
export const setContactsAction = payload => ({ type: SET_CONTACTS, payload });
export const deleteContactsAction = payload => ({ type: DELETE_CONTACTS, payload });