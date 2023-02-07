import {Container, RoundedButton, RoundedInput} from '../components';
import {
  ForgotPasswordHandler,
  ResetPasswordHandler,
} from '../requests/handlers/Auth';
import React, {useCallback} from 'react';
import {ScrollView, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {ScreenProps} from '../@types';
import {Styles} from '../styles';

export function ForgotPassword({navigation}: ScreenProps) {
  const [email, setEmail] = React.useState('');
  const [emailSent, setEmailSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [resetPasswordDetails, setResetPasswordDetails] = React.useState({
    code: '',
    password: '',
  });

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handleCodeChange = useCallback(
    (text: string) => {
      setResetPasswordDetails({...resetPasswordDetails, code: text});
    },
    [resetPasswordDetails],
  );

  const handlePasswordChange = useCallback(
    (text: string) => {
      setResetPasswordDetails({...resetPasswordDetails, password: text});
    },
    [resetPasswordDetails],
  );

  const forgotPassword = useCallback(() => {
    ForgotPasswordHandler(email, setLoading, setEmailSent);
  }, [email]);

  const resetPassword = useCallback(() => {
    ResetPasswordHandler(
      resetPasswordDetails.code,
      resetPasswordDetails.password,
      setLoading,
      navigation,
    );
  }, [resetPasswordDetails, navigation]);

  return (
    <ScrollView className="flex-1">
      <LinearGradient
        colors={[Styles.colors.lg_start, Styles.colors.lg_end]}
        className="rounded-br-full h-44 p-4">
        <Text className={`text-white ${Styles.fonts.kb} text-5xl`}>
          {emailSent ? 'Reset Password' : 'Forgot Password'}
        </Text>
        <Text className={`${Styles.fonts.kr} text-white text-base`}>
          {emailSent ? 'Enter the code and new Password' : 'Enter you email id'}
        </Text>
      </LinearGradient>

      {!emailSent ? (
        <Container>
          <RoundedInput
            value={email}
            onChangeText={handleEmailChange}
            label="Email"
            placeholder="Email"
            keyboardType="email-address"
            classOuterName="my-10"
          />
          <RoundedButton
            loading={loading}
            onPress={forgotPassword}
            title="Send"
          />
        </Container>
      ) : (
        <Container>
          <Text
            className={`${Styles.fonts.kr} font-bold text-center text-black`}>
            Note:{' '}
            <Text className="font-normal">
              The code will only be valid for 1 hour
            </Text>
          </Text>
          <RoundedInput
            value={resetPasswordDetails.code}
            onChangeText={handleCodeChange}
            label="Code"
            placeholder="Code"
            classOuterName="my-5"
          />
          <RoundedInput
            value={resetPasswordDetails.password}
            onChangeText={handlePasswordChange}
            label="New Password"
            placeholder="New Password"
            secureTextEntry
            classOuterName="mb-10"
          />
          <RoundedButton
            loading={loading}
            onPress={resetPassword}
            title="Reset Password"
          />
        </Container>
      )}
    </ScrollView>
  );
}
