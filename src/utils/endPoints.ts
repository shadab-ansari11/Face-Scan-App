import config from '../config';

const {BASE_URL} = config;

const endPoints = {
  // auth
  login: 'login',
};

const API_URLS = {
  // login
  USER_LOGIN: `${BASE_URL}/auth/user/${endPoints.login}`,
};

export default API_URLS;
