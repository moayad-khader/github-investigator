import * as actionTypes from "./user.actions";
import type { IUserState } from "./user.types";
import UserState from "./user.state";
import * as UserCalls from "./user.calls";

const intialState: IUserState = {
  ...UserState
};

const reducers = (state = intialState, action: any) => {
  switch (action.type) {

    case actionTypes.GET_ALL_USERS:
      UserCalls.GetAllCall(action);
      return { ...state };

    case actionTypes.SET_ALL_USERS:
      return {
        ...state,
        users: action.users
      };

    default:
      return { ...state };
  }
};

export default reducers;