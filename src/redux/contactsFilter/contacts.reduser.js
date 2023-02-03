import { contactsInitState } from "./contacts.init-state";
import { FILTER, SET_CONTACTS, DELETE_CONTACTS } from "./contacts.types";
import { combineReducers } from "redux";

const filterReduser = (state = contactsInitState.filter, { type, payload }) => {
    switch (type) {
        case FILTER:
            return payload;

        default:
            return state;
    }
};

const setContactsReduser = (state = contactsInitState.contacts, { type, payload }) => {
    switch (type) {
        case SET_CONTACTS:
            return [...state, payload];
        case DELETE_CONTACTS:
            return state.filter(c => c.id !== payload);

        default:
            return state;
    }
};

export const contactsReducer = combineReducers({
    filter: filterReduser,
    contacts: setContactsReduser,
});