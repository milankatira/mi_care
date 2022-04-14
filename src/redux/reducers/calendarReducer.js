import moment from 'moment';
import { SET_DEFAULT_DATE, SET_SELECTED_DATE, SET_SELECTED_MONTH, SET_SELECTED_YEAR } from "../constants/calendarConstant";




var todaytt = new Date();
var m_w_o=todaytt.getMonth();
var d_w_o=todaytt.getDate();
var dd = String(todaytt.getDate()).padStart(2, '0');
var mm = String(todaytt.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = todaytt.getFullYear();

todaytt =   '01' + '-' + mm + '-' + yyyy;
console.log(todaytt);

console.log(m_w_o)

const today = moment(todaytt, 'DD-MM-YYYY')
console.log(today);
const initialState = {
    today,
    defaultDate: moment(todaytt, 'DD-MM-YYYY'),
    selectedDate: d_w_o,
    selectedMonth: m_w_o,
    selectedYear: yyyy
}


// export const todayReducer = (initialState = state, action) => {
//     switch (action.payload) {
//         case GET_TODAY:
//             return {
//                 ...initialState,
//                 // today
//             }
//         // case SET_TODAY:
//         //     return {
//         //         ...initialState,
//         //         today: action.payload.value
//         //     }
//         default:
//             return initialState;
//     }
// }


export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEFAULT_DATE:
            console.log('today action', action)
            return {
                ...state,
                defaultDate: action.payload
            }
        case SET_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.payload
            }

        case SET_SELECTED_MONTH:
            return {
                ...state,
                selectedMonth: action.payload
            }
        case SET_SELECTED_YEAR:
            return {
                ...state,
                selectedYear: action.payload
            }
        default:
            return state;
    }
}