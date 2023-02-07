import {ActivityIndicator, Image, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

import {Authorised} from './Authorised';
import React from 'react';
import {Styles} from '../styles';
import {UnAuthorised} from './UnAuthorised';
import {checkForUserLogin} from '../utils';
import {login} from '../redux/reducers';

export const AppStack = () => {
  const [loading, setLoading] = React.useState(true);
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  //checking for user login
  React.useEffect(() => {
    checkForUserLoginHandler();
  }, []);

  /**
   * @abstract check for user login
   */
  const checkForUserLoginHandler = async () => {
    const res = await checkForUserLogin();
    if (res.isLoggedIn) {
      dispatch(
        login({
          user: res.user,
          token: res.token,
        }),
      );
    }
    setLoading(false);
  };

  //until the app is checking for user login show loading screen
  if (loading) {
    return (
      <View className="justify-center items-center flex-1 bg-white">
        <View className="gap-y-5">
          <ActivityIndicator color={'green'} size={'large'} />
          <Text className={`${Styles.fonts.kr} text-black`}>
            Checking Your Authentication
          </Text>
        </View>
      </View>
    );
  }

  return isAuthenticated ? <Authorised /> : <UnAuthorised />;
};
