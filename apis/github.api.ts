import constants from '../constants';
import { createGetJSON } from '../helpers/headers';


const getRepositories = (
    query:string,
    page: number
) => {
    return fetch(
        constants.GITHUB_ENDPOINT_URL.concat(constants.GITHUB_SEARCH_REPOSITORY_ROUTE, "?q=", query,  "&page=", page.toString()),
        createGetJSON()
      )
        .then((response) => {
          return response.json();
        })
        .catch((err) => console.log(err));
}   


const getUsers = (
    query:string,
    page: number
) => {
    return fetch(
        constants.GITHUB_ENDPOINT_URL.concat(constants.GITHUB_SEARCH_USER_ROUTE, "?q=", query, "&page=",  page.toString()),
        createGetJSON()
      )
        .then((response) => {
          return response.json();
        })
        .catch((err) => console.log(err));
} 

export {
    getRepositories,
    getUsers
}