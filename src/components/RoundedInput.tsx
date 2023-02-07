import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

import React from 'react';
import {Styles} from '../styles';

type RoundedInputProps = TextInputProps & {
  label?: string;
  classOuterName?: string;
};
export function RoundedInput({
  label,
  classOuterName,
  ...props
}: RoundedInputProps) {
  return (
    <View className={classOuterName ? classOuterName : ''}>
      {label && (
        <Text className={`${Styles.fonts.kr} px-4 py-1 `}>{label}</Text>
      )}
      <View style={styles.inputBorder} className={'rounded-full px-4'}>
        <TextInput {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBorder: {
    borderWidth: 1,
    borderColor: Styles.colors.primary,
  },
});
