import axios from "axios";

const { default: messageConstant } = require("../constants/messageconstant");

export const send_messageAction = (data) => {
  return {
    type: messageConstant.SEND_MESSAGE_SUCCESS,
    payload: data,
  };
};

export const send_messageAction_fail = (data) => {
  return {
    type: messageConstant.SEND_MESSAGE_FAIL,
    payload: data,
  };
};

export const get_messageAction = (data) => {
  return {
    type: messageConstant.GET_MESSAGE_LIST_SUCCESS,
    payload: data,
  };
};

export const get_messageAction_fail = (data) => {
  return {
    type: messageConstant.GET_MESSAGE_LIST_FAIL,
    payload: data,
  };
};

export const getMessageList = (packet) => {
  return (dispatch) => {
    axios
      .post("https://staging.miicube.info/user/loginAunthenticate", packet)
      .then((res) => {
        dispatch(get_messageAction(res));
      })
      .catch((err) => {
        dispatch(get_messageAction_fail(err));
      });
  };
};

export const sendMessage = (packet) => {
  return (dispatch) => {
    axios
      .post("https://staging.miicube.info/user/loginAunthenticate", packet)
      .then((res) => {
        dispatch(send_messageAction(res));
      })
      .catch((err) => {
        dispatch(send_messageAction_fail(err));
      })
  };
};
