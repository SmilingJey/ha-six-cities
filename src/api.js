import axios from 'axios';

export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.status === 403) {
      onLoginFail();
    }
    throw err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
