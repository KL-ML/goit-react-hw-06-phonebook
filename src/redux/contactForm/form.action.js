import { NAME, NUMBER, RESET_NAME, RESET_NUMBER } from "./form.types";

export const nameAction = payload => ({ type: NAME, payload });
export const numberAction = payload => ({ type: NUMBER, payload });
export const resetNameAction = payload => ({ type: RESET_NAME, payload });
export const resetNumberAction = payload => ({ type: RESET_NUMBER, payload });
