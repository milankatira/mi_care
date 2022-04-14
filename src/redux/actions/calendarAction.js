import { GET_DEFAULT_DATE, GET_TODAY, SET_DEFAULT_DATE, SET_SELECTED_DATE, SET_SELECTED_MONTH, SET_SELECTED_YEAR, SET_TODAY } from "../constants/calendarConstant"

export const getTodayAction = (value) => {
    return {
        type: GET_TODAY,
        payload: value
    }
}


export const setTodayAction = (value) => {
    return {
        type: SET_TODAY,
        payload: value
    }
}


export const getDefaultDateAction = (value) => {
    return {
        type: GET_DEFAULT_DATE,
        payload: value
    }
}


export const setDefaultDateAction = (value) => {
    return {
        type: SET_DEFAULT_DATE,
        payload: value
    }
}

export const setSelectedDate = (value) => {
    return {
        type: SET_SELECTED_DATE,
        payload: value
    }
}


export const setSelectedMonth = (value) => {
    return {
        type: SET_SELECTED_MONTH,
        payload: value
    }
}

export const setSelectedYear = (value) => {
    return {
        type: SET_SELECTED_YEAR,
        payload: value
    }
}