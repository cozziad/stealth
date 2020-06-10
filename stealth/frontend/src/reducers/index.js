import { combineReducers } from "redux";
import contactInfo from "./settings";
import errors from "./errors";
import messages from "./messages"

export default combineReducers({
    contactInfo,
    errors,
    messages
});
