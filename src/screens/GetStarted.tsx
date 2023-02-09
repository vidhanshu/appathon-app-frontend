import {Container, RoundedButton} from '../components';
import {Image, Text, View} from 'react-native';
import React, {useCallback} from 'react';

import {AUTH_SCREEN} from '../constants';
import {ScreenProps} from '../@types';
import {Styles} from '../styles';

export const GetStarted = ({navigation}: ScreenProps) => {
  const handleGetStarted = useCallback(() => {
    console.log('pressed');
    navigation.navigate(AUTH_SCREEN);
  }, []);

  return (
    <View className="flex-1 justify-center gap-y-14">
      <Container className="gap-y-3 ">
        <Text className={`${Styles.fonts.kb} text-black text-4xl`}>
          Welcome!
        </Text>
        <Text className={`${Styles.fonts.km} text-base`}>
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
