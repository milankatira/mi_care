import axios from "axios";
import { login_url, loginAunthenticate } from "../constants/app_urls";

const options = {
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
};
export const userLogin = async (data) => {
  await axios
    .post(login_url, data, options)
    .then((response) => response)
    .catch((err) => {
      throw new err();
    });
};

export const userloginAuthenticate = async (data) => {
  await axios
    .post(loginAunthenticate, data)
    .then((response) => response)
    .catch((err) => {
      throw new err();
    });
};
