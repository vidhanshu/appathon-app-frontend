import {Container, RoundedButton} from '../components';
import {Image, Text, View} from 'react-native';
import React, {useCallback} from 'react';

import {AUTH_SCREEN} from '../constants';
import {ScreenProps} from '../@types';
import {Styles} from '../styles';
import {useAppSelector} from '../redux/hooks';

export const GetStarted = ({navigation}: ScreenProps) => {
  const {styles} = useAppSelector(state => state.theme);

  const handleGetStarted = useCallback(() => {
    navigation.navigate(AUTH_SCREEN);
  }, []);

  return (
    <View className={`flex-1 justify-center gap-y-14 ${styles.bg__colors.bp}`}>
      <Container className="gap-y-3 ">
        <Text
          className={`${Styles.fonts.kb} ${styles.text__colors.tp} text-4xl`}>
          Welcome!
        </Text>
        <Text
          className={`${Styles.fonts.km} text-base ${styles.text__colors.tt}`}>
          Empowering the Next Generation: Connecting Mentors and Students
        </Text>
      </Container>
      <View>
        <Image
          className="w-[95%] h-64 m-auto"
          source={require('../assets/img/mentor.png')}
        />
      </View>
      <Container className="gap-y-4">
        <RoundedButton onPress={handleGetStarted} title="Get started" />
      </Container>
    </View>
  );
};
