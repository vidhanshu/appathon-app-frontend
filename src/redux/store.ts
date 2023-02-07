import {authReducer} from './reducers';
import {configureStore} from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
