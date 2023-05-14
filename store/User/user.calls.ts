import * as api from "apis/github.api";
import * as actionTypes from "./user.actions";


export const GetAllCall = (action:any) =>
  api.getUsers(action.query).then((data:any) => {
    console.log("data",data)
    if (data && !data.items) {
      action.asyncDispatch({
        type: actionTypes.ERROR,
        message: data.message,
      });
    } else {
      action.asyncDispatch({
        type: actionTypes.SET_ALL_USERS,
        users: data.items || [],
        reset: action.page === 1 ,
        total_count: data.total_count
      });
    }
  });



