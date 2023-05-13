import Page from "./page";
import { connect } from "react-redux";
import * as RepositoryActionTypes from "store/Repository/repository.actions";


const mapStateToProps = (state: any) => {
    return {
        repositories: state.RepositoryState.repositories
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
      getAllRepositories: (query:string) =>
        dispatch({ type: RepositoryActionTypes.GET_ALL_REPOSITORIES, query})
    };
};
  

export default connect(mapStateToProps,mapDispatchToProps)(Page);