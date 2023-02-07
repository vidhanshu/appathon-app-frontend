import {
  DeleteUser,
  ForgotPassword,
  LoginUser,
  LogoutUser,
  ResetPassword,
  UpdateUser,
  createUser,
} from '../Auth';
import {
  LoginDataType,
  SignUpDataType,
  UserDataType,
  UserDataTypeForUpdate,
} from '../../@types';
import {
  checkForValidEmail,
  checkForValidPassword,
  checkForValidUsername,
} from '../../utils';
import {login, logout} from '../../redux/reducers';

import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {SIGN_IN_SCREEN} from '../../constants';

export const SignUpUserHandler = async (
  data: SignUpDataType,
  dispatch: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setLoading(true);
  try {
    if (
      !checkForValidPassword(data.password) ||
      !checkForValidUsername(data.username) ||
      !checkForValidEmail(data.email)
    ) {
      throw new Error(
        'Password must have 1 lowercase, 1 uppercase, 1 special, 1 number character with min length 8\n\nEmail must be valid\n\nUsername must have min length of 7 and must not contain space and special characters',
      );
    }
    const res = await createUser(data);
    if (res.error) {
      throw new Error(res.code);
    }
    dispatch(login({user: res.data.data.user, token: res.data.data.token}));
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({data: res.data.data.user, token: res.data.data.token}),
    );
  } catch (error: any) {
    Alert.alert('Error', error.message, [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  } finally {
    setLoading(false);
  }
};

export const LoginUserHandler = async (
  data: LoginDataType,
  dispatch: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setLoading(true);
  try {
    const res = await LoginUser(data);
    if (res.error) {
      throw new Error(res.code);
    }
    dispatch(login({user: res.data.data.user, token: res.data.data.token}));
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({data: res.data.data.user, token: res.data.data.token}),
    );
  } catch (error: any) {
    Alert.alert('Error', error.message, [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  }
  setLoading(false);
};

export const LogoutUserHandler = async (
  token: string,
  dispatch: any,
): Promise<void> => {
  try {
    const res = await LogoutUser(token);
    if (res.error) {
      if (res.code === 'You are not authorized') {
        dispatch(logout());
        await AsyncStorage.removeItem('user');
        return;
      }
      throw new Error(res.code);
    }
    dispatch(logout());
    await AsyncStorage.removeItem('user');
  } catch (error: any) {
    Alert.alert('Error', error.message, [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  }
};

export const UpdateUserHandler = async (
  token: string | null,
  data: any,
  dispatch: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  OldData: UserDataType,
): Promise<void> => {
  setLoading(true);
  try {
    const dataToBeUpdated: UserDataTypeForUpdate = {
      id: OldData.id,
    } as UserDataTypeForUpdate;

    if (data.username !== OldData.username) {
      dataToBeUpdated.username = data.username;
    }
    if (data.email !== OldData.email) {
      dataToBeUpdated.email = data.email;
    }
    if (data.name !== OldData.name) {
      dataToBeUpdated.name = data.name;
    }
    if (data.password) {
      dataToBeUpdated.password = data.password;
    }

    const res = await UpdateUser(dataToBeUpdated, token);
    if (res.error) {
      throw new Error(res.code);
    } else {
      Alert.alert('Success', res.code, [
        {
          text: 'Ok',
          onPress: () => {},
        },
      ]);
    }
    //update the state
    dispatch(login({user: {...res.data, id: data.id}, token}));
    //update the async storage
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({data: {...res.data, id: data.id}, token}),
    );
  } catch (error: any) {
    Alert.alert('Error', error.message, [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  }
  setLoading(false);
};

export const ForgotPasswordHandler = async (
  email: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setEmailSent: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    if (!checkForValidEmail(email)) {
      throw new Error('Invalid Email');
    }
    setLoading(true);
    const res = await ForgotPassword(email);
    if (res.error) {
      throw new Error(res.code);
    }
    setEmailSent(true);
    Alert.alert(
      'Email Sent',
      'Please check your email to reset your password \nNote: The email may be in promotions or spam folder',
    );
  } catch (error: any) {
    Alert.alert('Error', error.message, [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  } finally {
    setLoading(false);
  }
};

export const ResetPasswordHandler = async (
  code: string,
  password: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigation: any,
) => {
  try {
    if (!checkForValidPassword(password)) {
      throw new Error(
        'Password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character & must have length >= 8',
      );
    }
    setLoading(true);
    const res = await ResetPassword(code, password);
    if (res.error) {
      throw new Error(res.code);
    }
    Alert.alert(
      'Password Reset Successfully',
      'Now you can signin with your new password',
      [
        {
          text: 'Ok',
          onPress: () => {
            navigation.navigate(SIGN_IN_SCREEN);
          },
        },
      ],
    );
  } catch (error: any) {
    Alert.alert('Error', error.message, [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  } finally {
    setLoading(false);
  }
};

export const DeleteUserHandler = async (
  token: string,
  dispatch: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    setLoading(true);
    const res = await DeleteUser(token);
    if (res.error) {
      throw new Error(res.code);
    }
    dispatch(logout());
  } catch (error: any) {
    Alert.alert('Error', error.message, [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  } finally {
    setLoading(false);
  }
};
