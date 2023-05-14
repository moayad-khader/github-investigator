import * as api from "apis/github.api";
import * as actionTypes from "./repository.actions";


export const GetAllCall = (action:any) =>
  api.getRepositories(action.query).then((data:any) => {
    if (data && !data.items) {
      action.asyncDispatch({
        type: actionTypes.ERROR,
        message: data.message,
      });
    } else {
      action.asyncDispatch({
        type: actionTypes.SET_ALL_REPOSITORIES,
        repositories: data.items || []
      });
    }
  });



