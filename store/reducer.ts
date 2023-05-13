import { combineReducers } from "redux";
import repositoryReducer from "./Repository/repository.reducers";

const rootReducer = combineReducers({
    RepositoryState: repositoryReducer
});

export default rootReducer;
