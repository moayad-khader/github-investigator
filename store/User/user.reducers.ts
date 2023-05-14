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
      const users = 
        action.reset ? 
          action.users :
          [... state.users ,...action.users]
      return {
        ...state,
        users
      };

    default:
      return { ...state };
  }
};

export default reducers;