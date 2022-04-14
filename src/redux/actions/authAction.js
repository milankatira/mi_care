import axios from "axios";
import { userloginAuthenticate } from "../../api/login_api";

// console.log()
const { default: authConstant } = require("../constants/authConstant");

export const authenticateAction = (data) => {
  return {
    type: authConstant.USER_AUTHENTICATE,
    payload: {
      token: data.jwt,
      refreshToken: data.refreshToken,
    },
  };
};

export const registerAction = (data) => {
  // TODO : check RESPONSE and modify payload
  return {
    type: authConstant.USER_REGISTER,
    payload: data,
  };
};

export const logoutAction = () => {
  return {
    type: authConstant.USER_LOGOUT,
  };
};

export const loginAction = (data) => {
  return {
    type: authConstant.USER_LOGIN,
    payload: data,
  };
};

export const LoginUser = (packet) => {
  console.log("packet", packet);
  return (dispatch) => {
    axios
      .post("https://staging.miicube.info/user/loginAunthenticate", packet)
      .then((res) => {
        console.log("hi from the redux folder", res.data);
        if (res.data.ErrorCode === 4001) {
          sessionStorage.setItem("ID", "username @ password wrong");
          window.location.assign("/login");
        }
        if (res.data.ErrorCode === 0) {
          sessionStorage.setItem("login", "login");
          sessionStorage.setItem("health", "true");

          dispatch(loginAction(res));

          window.location.assign("/dashboard");
        }
        //   dispatch(loginAction(res));
      });
  };
};
