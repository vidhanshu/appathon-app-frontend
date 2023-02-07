import {Text, View} from 'react-native';

import React from 'react';
import {SETTINGS_SCREEN} from '../constants';
import {ScreenProps} from '../@types';

export const Home = ({navigation}: ScreenProps) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate(SETTINGS_SCREEN)}>Home </Text>
    </View>
  );
};
