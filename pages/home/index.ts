import Page from "./page";
import { connect } from "react-redux";
import * as RepositoryActionTypes from "store/Repository/repository.actions";
import * as UserActionTypes from "store/User/user.actions";

const mapStateToProps = (state: any) => {
    return {
        repositories: state.RepositoryState.repositories,
        users: state.UserState.users
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
      getAllRepositories: (query:string, page:number) =>
        dispatch({ type: RepositoryActionTypes.GET_ALL_REPOSITORIES, query, page}),
      resetRepositories: () =>
        dispatch({ type: RepositoryActionTypes.SET_ALL_REPOSITORIES, repositories: []}),
      getAllUsers:(query:string, page:number) =>
        dispatch({ type: UserActionTypes.GET_ALL_USERS, query, page}),
      resetUsers: () =>
        dispatch({ type: UserActionTypes.SET_ALL_USERS, users: []}),
    };
};
  

export default connect(mapStateToProps,mapDispatchToProps)(Page);