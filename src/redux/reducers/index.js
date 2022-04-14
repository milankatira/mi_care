import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer";
const { authReducer } = require("./authReducer");

const rootReducer = combineReducers({
    auth: authReducer,
    calendarReducer: calendarReducer
})

export default rootReducer