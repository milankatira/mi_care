import messageconstant from "../constants/messageconstant";

const initialState={
  messageList:[],
  messageListError:null,
  message:null,
  messageError:null,
  loading:false,
}

export const messageReducer = (state=initialState,action)=>{
  switch(action.type){
    case messageconstant.GET_MESSAGE_LIST_SUCCESS:
      return{
        ...state,
        messageList:action.payload,
        loading:false,
      }
    case messageconstant.GET_MESSAGE_LIST_FAIL:
      return{
        ...state,
        messageListError:action.payload,
        loading:false,
      }
    case messageconstant.SEND_MESSAGE_SUCCESS:
      return{
        ...state,
        message:action.payload,
        loading:false,
      }
    case messageconstant.SEND_MESSAGE_FAIL:
      return{
        ...state,
        messageError:action.payload,
        loading:false,
      }
    default:
      return state;
  }
}