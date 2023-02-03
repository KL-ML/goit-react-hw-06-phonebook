import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from '@redux-devtools/extension';
import { formInitState } from "./contactForm/form.init-state";
import { formReduser } from "./contactForm/form.reduser";
import { contactsInitState } from "./contactsFilter/contacts.init-state";
import { contactsReducer } from "./contactsFilter/contacts.reduser";

const initState = {
    form: formInitState,
    contacts: contactsInitState,
}

const rootReduser = combineReducers({
    form: formReduser,
    contacts: contactsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReduser, initState, enhancer);