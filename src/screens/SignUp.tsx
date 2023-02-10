import {
  Container,
  RoundedButton,
  RoundedInput,
  SectionSeperator,
} from '../components';
import React, {useCallback} from 'react';
import {ScreenProps, SignUpDataType} from '../@types';
import {ScrollView, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

import LinearGradient from 'react-native-linear-gradient';
import {SIGN_IN_SCREEN} from '../constants';
import {SignUpUserHandler} from '../requests/handlers/Auth';
import {Styles} from '../styles';

export function SignUp({navigation}: ScreenProps) {
  const {styles, theme} = useAppSelector(state => state.theme);

  const [loading, setLoading] = React.useState(false);
  const [signUpDetails, setSignUpDetails] = React.useState<SignUpDataType>({
    email: '',
    password: '',
    username: '',
  });

  const dispatch = useAppDispatch();

  const handleSignIn = useCallback(() => {
    navigation.navigate(SIGN_IN_SCREEN);
  }, [navigation]);
  const handlePasswordChange = useCallback((password: string) => {
    setSignUpDetails(prev => ({...prev, password}));
  }, []);
  const handleEmailChange = useCallback((email: string) => {
    setSignUpDetails(prev => ({...prev, email}));
  }, []);
  const handleUsernameChange = useCallback((username: string) => {
    setSignUpDetails(prev => ({...prev, username}));
  }, []);
  const handleSignUp = useCallback(() => {
    SignUpUserHandler(signUpDetails, dispatch, setLoading);
  }, [signUpDetails, dispatch]);

  return (
    <ScrollView className={`flex-1 ${styles.bg__colors.bgt}`}>
      <LinearGradient
        colors={[Styles.colors.lg_start, Styles.colors.lg_end]}
        className="rounded-br-full h-24 p-4">
        <Text className={`text-white ${Styles.fonts.kb} text-5xl`}>
          Sign Up
        </Text>
        <Text className={`${Styles.fonts.kr} text-white text-base`}>
          Sign up and get started
        </Text>
      </LinearGradient>

      <Container>
        <RoundedInput
          value={signUpDetails.username}
          label="Username"
          placeholder="Username"
          onChangeText={handleUsernameChange}
        />
        <RoundedInput
          value={signUpDetails.email}
          classOuterName="my-4"
          label="Email"
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={handleEmailChange}
        />
        <RoundedInput
          secure
          value={signUpDetails.password}
          classOuterName="mb-10"
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
        <RoundedButton
          loading={loading}
          onPress={handleSignUp}
          title="Sign Up"
        />
      </Container>
      <SectionSeperator>Or</SectionSeperator>
      <Container className="gap-y-9">
        <RoundedButton
          onPress={handleSignIn}
          title="Already have an account?"
        />
      </Container>
    </ScrollView>
  );
}
