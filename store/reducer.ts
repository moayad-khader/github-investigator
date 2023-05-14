import { combineReducers } from 'redux';
import repositoryReducer from './Repository/repository.reducers';
import userReducer from './User/user.reducers';

const rootReducer = combineReducers({
    RepositoryState: repositoryReducer,
    UserState: userReducer
});

export default rootReducer;
