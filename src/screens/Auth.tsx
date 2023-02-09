import {Container, RoundedButton} from '../components';
import {Image, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {SIGN_IN_SCREEN, SIGN_UP_SCREEN} from '../constants';

import {ScreenProps} from '../@types';
import {Styles} from '../styles';

export const Auth = ({navigation}: ScreenProps) => {
  const handleSignIn = useCallback(() => {
    navigation.navigate(SIGN_IN_SCREEN);
  }, []);

  const handleSignUp = useCallback(() => {
    navigation.navigate(SIGN_UP_SCREEN);
  }, []);

  return (
    <View className="flex-1 justify-center gap-y-14">
      <Container className="gap-y-3">
        <Text className={`${Styles.fonts.kb} text-black text-4xl`}>Hello!</Text>
        <Text className={`${Styles.fonts.km} text-base`}>
          Login with your data that you entered during registration
        </Text>
      </Container>

      <View>
        <Image
          className="w-[95%] h-64 m-auto"
          source={require('../assets/img/auth.png')}
        />
      </View>

      <Container className="gap-y-4">
        <RoundedButton onPress={handleSignUp} title="Sign Up" />
        <RoundedButton
          onPress={handleSignIn}
          className="mt-5"
          variant="primary"
          title="Sign In"
        />
      </Container>
    </View>
  );
};
