import * as actionTypes from "./repository.actions";
import type { IRepositoryState } from "./repository.types";
import RepositoryState from "./repository.state";
import * as RepositoryCalls from "./repository.calls";

const intialState: IRepositoryState = {
  ...RepositoryState
};

const reducers = (state = intialState, action: any) => {
  switch (action.type) {

    case actionTypes.GET_ALL_REPOSITORIES:
      RepositoryCalls.GetAllCall(action);
      return { ...state };

    case actionTypes.SET_ALL_REPOSITORIES:
      return {
        ...state,
        repositories: action.repositories
      };

    default:
      return { ...state };
  }
};

export default reducers;