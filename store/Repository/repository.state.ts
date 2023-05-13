import type {
    IRepositoryState
} from "./repository.types";
 
 
 const RepositoryState: IRepositoryState = {
     repositories:[],
     isLoading: false,
     error: ""
 };
 
 export default RepositoryState;
 