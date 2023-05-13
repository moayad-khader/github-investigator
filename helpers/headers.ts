const getHeader = () => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return header;
};

const createPostJSON = (data:any) => {
  const lbc = {
    method: "POST",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(data),
  };
  return lbc;
};

const createPutJSON = (data:any) => {
  const lbc = {
    method: "PUT",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(data),
  };
  return lbc;
};
const createDELETEJSON = (data:any) => {
  const lbc = {
    method: "DELETE",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(data),
  };
  return lbc;
};

const createGetJSON = () => {
  const lbc = {
    method: "GET",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    timeout: 5000,
  };
  return lbc;
};

export { createGetJSON, createPostJSON, createPutJSON, createDELETEJSON };
