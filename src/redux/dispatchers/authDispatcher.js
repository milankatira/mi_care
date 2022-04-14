import { authenticateAction, logoutAction } from "../actions/authAction";
const { authenticate, createUser } = require("../../services/authService");

export const authenticateDispatcher = (data) => {
    return async (dispatch, getState) => {
        try {
            const resp = await authenticate(data);
            if (resp) {
                if (resp.payload) {
                    dispatch(authenticateAction(resp.payload));
                }
            }
        } catch (error) {
            console.log('==================authenticateDispatcher==================');
            console.log(error);
            console.log('==================authenticateDispatcher==================');
        }
    }
}

export const registerDispatcher = (data) => {
    return async (dispatch, getState) => {
        try {
            const resp = await createUser(data);
            // if (resp) {
            //     if (resp.payload) {
            //         dispatch(registerAction(resp.payload));
            //     }
            // }
        } catch (error) {
            console.log('==================registerDispatcher==================');
            console.log(error);
            console.log('==================registerDispatcher==================');
        }
    }
}

export const logoutDispatcher = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(logoutAction());
        } catch (error) {
            console.log('==================registerDispatcher==================');
            console.log(error);
            console.log('==================registerDispatcher==================');
        }
    }
}
