import authConstant from "../constants/authConstant";

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
  loginUser: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.USER_AUTHENTICATE:
      return {
        ...state,
        ...action.payload,
      };
    case authConstant.USER_REGISTER:
      return {
        ...state,
        ...action.payload,
      };
    case authConstant.USER_LOGOUT:
      return initialState;

    case authConstant.USER_LOGIN:
      return {
        ...state,
        loginUser: action.payload,
      };

    default:
      return state;
  }
};
