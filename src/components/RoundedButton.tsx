/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Styles} from '../styles';
import {useAppSelector} from '../redux/hooks';

type RoundedButtonProps = PressableProps & {
  title: string;
  variant?: 'default' | 'primary' | 'color';
  loading?: boolean;
  btn_color?: string;
  text_color?: string;
};
export function RoundedButton({
  title,
  loading = false,
  variant = 'default',
  btn_color = '#000',
  text_color = '#fff',
  ...props
}: RoundedButtonProps) {
  const {styles} = useAppSelector(state => state.theme);

  const btnColor = props.disabled || loading ? '#ccc' : btn_color;
  if (variant === 'color') {
    return (
      <Pressable
        disabled={loading}
        {...props}
        className={`p-3 rounded-full ${props.className ? props.className : ''}`}
        style={{
          backgroundColor: btnColor,
        }}>
        {!loading ? (
          <Text
            className={`${Styles.fonts.km} text-center text-base`}
            style={{
              color: text_color,
            }}>
            {title}
          </Text>
        ) : (
          <View className="flex-row justify-center">
            <ActivityIndicator color={text_color} />
          </View>
        )}
      </Pressable>
    );
  }

  let colors =
    props.disabled || loading
      ? ['gray', 'gray']
      : [Styles.colors.lg_start, Styles.colors.lg_end];
  if (variant === 'default') {
    return (
      <Pressable
        disabled={loading}
        {...props}
        className={props.className ? props.className : ''}>
        <LinearGradient
          className="p-3 rounded-full"
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={colors}>
          {!loading ? (
            <Text
              className={`text-center text-base text-white ${Styles.fonts.km}`}>
              {title}
            </Text>
          ) : (
            <View className="flex-row justify-center">
              <ActivityIndicator color="white" />
            </View>
          )}
        </LinearGradient>
      </Pressable>
    );
  }

  let borderColor = props.disabled || loading ? 'gray' : Styles.colors.primary;
  return (
    <Pressable
      disabled={loading}
      {...props}
      className={`p-3 rounded-full ${props.className ? props.className : ''}`}
      style={{
        borderWidth: 1,
        borderColor,
      }}>
      {!loading ? (
        <Text
          className={`text-center text-base ${styles.text__colors.tm} ${Styles.fonts.km}`}>
          {title}
        </Text>
      ) : (
        <View className="flex-row justify-center">
          <ActivityIndicator color="black" />
        </View>
      )}
    </Pressable>
  );
}
