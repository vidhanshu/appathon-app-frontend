import {Container, RoundedButton, RoundedInput} from '../components';
import {FORGOT_PASSWORD_SCREEN, SIGN_UP_SCREEN} from '../constants';
import React, {useCallback} from 'react';
import {ScrollView, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

import LinearGradient from 'react-native-linear-gradient';
import {LoginUserHandler} from '../requests/handlers/Auth';
import {ScreenProps} from '../@types';
import {Styles} from '../styles';

export function SignIn({navigation}: ScreenProps) {
  const {styles} = useAppSelector(state => state.theme);

  const [signInDetails, setSignInDetails] = React.useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAppDispatch();

  const handleEmailChange = useCallback(
    (text: string) => {
      setSignInDetails({...signInDetails, email: text});
    },
    [signInDetails],
  );

  const handlePasswordChange = useCallback(
    (text: string) => {
      setSignInDetails({...signInDetails, password: text});
    },
    [signInDetails],
  );

  const handleSignUp = useCallback(() => {
    navigation.navigate(SIGN_UP_SCREEN);
  }, []);
  const handleForgotPassword = useCallback(() => {
    navigation.navigate(FORGOT_PASSWORD_SCREEN);
  }, []);

  const SignInUser = useCallback(() => {
    LoginUserHandler(signInDetails, dispatch, setLoading);
  }, [signInDetails, dispatch]);

  return (
    <ScrollView className={`flex-1 ${styles.bg__colors.bp}`}>
      <LinearGradient
        colors={[Styles.colors.lg_start, Styles.colors.lg_end]}
        className="rounded-br-full h-32 p-4">
        <Text className={`text-white ${Styles.fonts.kb} text-5xl`}>
          Sign In
        </Text>
        <Text className={`${Styles.fonts.kr} text-white text-base`}>
          Sign in and get started
        </Text>
      </LinearGradient>

      <Container>
        <RoundedInput
          value={signInDetails.email}
          onChangeText={handleEmailChange}
          label="Email Or Username"
          placeholder="Email Or Username"
          keyboardType="email-address"
        />
        <RoundedInput
          secure
          value={signInDetails.password}
          onChangeText={handlePasswordChange}
          classOuterName="mt-5 mb-10"
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
        />
        <RoundedButton loading={loading} onPress={SignInUser} title="Sign In" />
      </Container>

      <Container className="gap-y-9">
        <Text
          onPress={handleForgotPassword}
          className={`${Styles.fonts.kr} text-blue-600 text-center text-base`}>
          Forgot your password?
        </Text>

        <RoundedButton onPress={handleSignUp} title="Don't have an account?" />
      </Container>
    </ScrollView>
  );
}
