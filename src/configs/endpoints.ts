export const BASE_URL = 'http://192.168.137.33:5000';

/**
 * @description Auth Endpoints
 */
export const CREATE_USER = '/auth/signup';
export const LOGIN_USER = '/auth/login';
export const LOGOUT_USER = '/auth/logout';
export const LOGOUT_ALL_USER = '/auth/logoutall';
export const DELETE_USER = '/auth/delete';
export const FORGOT_PASSWORD = '/auth/forgot-password';
export const RESET_PASSWORD = '/auth/reset-password';

/**
 * @description User Endpoints
 */
//get request
export const GET_USER = (user_id: string | number) =>
  `/user/profile/${user_id}`;
export const SEARCH_USER = (search: string) => `/user/search?search=${search}`;
//patch request - all authenticated routes
export const UPDATE_NAME = '/user/update/name';
export const UPDATE_USERNAME = '/user/update/username';
export const UPDATE_EMAIL = '/user/update/email';
export const UPDATE_PASSWORD = '/user/update/password';
