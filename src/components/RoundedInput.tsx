import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Styles} from '../styles';
import {useAppSelector} from '../redux/hooks';

type RoundedInputProps = TextInputProps & {
  label?: string;
  classOuterName?: string;
  secure?: boolean;
};
export function RoundedInput({
  label,
  classOuterName,
  secure = false,
  ...props
}: RoundedInputProps) {
  const {styles: S, theme} = useAppSelector(state => state.theme);
  const [secureText, setSecureText] = React.useState(secure);

  if (secure) {
    return (
      <View className={classOuterName ? classOuterName : ''}>
        {label && (
          <Text
            className={`${Styles.fonts.kr} px-4 py-1  ${S.text__colors.tp}`}>
            {label}
          </Text>
        )}
        <View
          style={styles.inputBorder}
          className={'rounded-full flex-row px-4 items-center'}>
          <TextInput
            placeholderTextColor={theme === 'light' ? 'gray' : 'white'}
            className={`${Styles.fonts.km} flex-1 ${S.text__colors.tm}`}
            {...props}
            secureTextEntry={secureText}
          />
          <Ionicons
            onPress={() => {
              setSecureText(!secureText);
            }}
            name={secureText ? 'eye-off' : 'eye'}
            size={20}
            color="gray"
          />
        </View>
      </View>
    );
  }
  return (
    <View className={classOuterName ? classOuterName : ''}>
      {label && (
        <Text className={`${Styles.fonts.kr} px-4 py-1 ${S.text__colors.tp} `}>
          {label}
        </Text>
      )}
      <View style={styles.inputBorder} className={'rounded-full px-4'}>
        <TextInput
          placeholderTextColor={theme === 'light' ? 'gray' : 'white'}
          className={`${Styles.fonts.km} flex-1 ${S.text__colors.tm}`}
          {...props}
        />
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
