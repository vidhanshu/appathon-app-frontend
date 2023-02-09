import {
  AUTH_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  GET_STARTED_SCREEN,
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
} from '../constants';
import {Auth, ForgotPassword, SignIn, SignUp} from '../screens';

import {GetStarted} from '../screens/GetStarted';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export const UnAuthorised = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={GET_STARTED_SCREEN} component={GetStarted} />
      <Stack.Screen name={AUTH_SCREEN} component={Auth} />
      <Stack.Screen
        options={{headerShown: true, headerTitle: 'Sign In'}}
        name={SIGN_IN_SCREEN}
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitle: 'Register'}}
        name={SIGN_UP_SCREEN}
        component={SignUp}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitle: 'Reset Password'}}
        name={FORGOT_PASSWORD_SCREEN}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default UnAuthorised;
