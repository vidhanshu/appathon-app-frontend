import {DARK_THEME, LIGHT_THEME} from '../styles';

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
const themeSlice = createSlice({
  name: 'theme',
  initialState: {theme: 'light', styles: LIGHT_THEME},
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      state.styles = state.theme === 'light' ? LIGHT_THEME : DARK_THEME;
    },
  },
});
export const {reducer: authReducer} = authSlice;
export const {login, logout} = authSlice.actions;
export const {reducer: themeReducer} = themeSlice;
export const {changeTheme} = themeSlice.actions;
