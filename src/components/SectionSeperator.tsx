import {Text, View} from 'react-native';

import React from 'react';

type SectionSeperatorProps = {
  children: string;
};
export function SectionSeperator({children}: SectionSeperatorProps) {
  return (
    <View className="flex-row gap-x-2 px-4 my-2 items-center">
      <View className="h-[1px] bg-gray-400 flex-1" />
      <Text>{children}</Text>
      <View className="h-[1px] bg-gray-400 flex-1" />
    </View>
  );
}
