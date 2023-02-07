import {AuthStateType} from '../@types';
import {createSlice} from '@reduxjs/toolkit';

const INITIAL_AUTH_STATE: AuthStateType = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});
export const {reducer: authReducer} = authSlice;
export const {login, logout} = authSlice.actions;
