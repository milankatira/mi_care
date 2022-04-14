import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer";
const { authReducer } = require("./authReducer");
const { messageReducer } = require("./messageReducer");
const rootReducer = combineReducers({
    auth: authReducer,
    calendarReducer: calendarReducer,
    messageReducer: messageReducer

})

export default rootReducer