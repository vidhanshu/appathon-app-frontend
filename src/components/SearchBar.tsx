import {TextInput, View} from 'react-native';

import Anticons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Styles} from '../styles';
import {useAppSelector} from '../redux/hooks';

type SearchBarProps = {
  search: string;
  onChange: (text: string) => void;
  onCutHandler: () => void;
};
export const SearchBar = ({search, onChange, onCutHandler}: SearchBarProps) => {
  const {styles, theme} = useAppSelector(state => state.theme);
  return (
    <View
      className={`${styles.borders.bat} flex-row items-center px-2 rounded-md`}>
      <Ionicons name="search-outline" size={24} color="gray" />
      <TextInput
        value={search}
        placeholder="Type area of interest..."
        className={`${Styles.fonts.km} ml-2 w-full ${styles.text__colors.tm} flex-1 ${styles.text__colors.tm}}`}
        onChangeText={onChange}
        placeholderTextColor={theme === 'light' ? 'gray' : 'white'}
      />
      {search.length > 0 && (
        <Anticons onPress={onCutHandler} name="close" size={24} color="gray" />
      )}
    </View>
  );
};
