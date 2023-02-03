import { combineReducers } from "redux";
import { formInitState } from "./form.init-state";
import { NAME, NUMBER, RESET_NAME, RESET_NUMBER } from "./form.types";


const nameInputReduser = (state = formInitState.name, { type, payload }) => {
    switch (type) {
        case NAME:
            return payload;
        case RESET_NAME:
            return formInitState.name;
        default:
            return state;
    }
};

const numberInputReduser = (state = formInitState.number, { type, payload }) => {
    switch (type) {
        case NUMBER:
            return payload;
        case RESET_NUMBER:
            return formInitState.number;
        default:
            return state;
    }
};

export const formReduser = combineReducers({
    name: nameInputReduser,
    number: numberInputReduser,
});