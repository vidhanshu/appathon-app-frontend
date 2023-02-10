import {Text, View} from 'react-native';

import React from 'react';
import {Styles} from '../styles';
import {useAppSelector} from '../redux/hooks';

type SectionSeperatorProps = {
  children: string;
};
export function SectionSeperator({children}: SectionSeperatorProps) {
  const {styles} = useAppSelector(state => state.theme);

  return (
    <View className="flex-row gap-x-2 px-4 my-2 items-center">
      <View className="h-[1px] bg-gray-400 flex-1" />
      <Text className={`${Styles.fonts.kr} ${styles.text__colors.tp}`}>
        {children}
      </Text>
      <View className="h-[1px] bg-gray-400 flex-1" />
    </View>
  );
}
