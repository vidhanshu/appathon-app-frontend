import {Container, SearchBar} from '../components';
import React, {useCallback} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {Styles} from '../styles';
import {useAppSelector} from '../redux/hooks';

export const SearchUser = () => {
  const {styles} = useAppSelector(s => s.theme);
  const [search, setSearch] = React.useState<string>('');
  const onChange = useCallback((text: string) => {
    setSearch(text);
  }, []);
  const onCutHandler = useCallback(() => {
    setSearch('');
  }, []);

  return (
    <Container className={`flex-1 ${styles.bg__colors.bp}`}>
      <SearchBar
        search={search}
        onChange={onChange}
        onCutHandler={onCutHandler}
      />

      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <UserCard
            key={i}
            email="vidhanshu7218@gmail.com"
            name="Vidhanshu Borade"
            username="@vidhanshu7218"
          />
        ))}
      </ScrollView>
    </Container>
  );
};

type UserCardProps = {
  name: string;
  email: string;
  username: string;
};
const UserCard = ({email, name, username}: UserCardProps) => {
  const {styles} = useAppSelector(s => s.theme);
  return (
    <View
      className={`${styles.borders.bat} rounded-md p-2 mb-5 flex-row items-center`}>
      <View className="w-10 h-10 rounded-full bg-red-600 mr-5" />
      <View>
        <Text className={`${styles.text__colors.tm} ${Styles.fonts.km}`}>
          {name}
        </Text>
        <Text className={`${styles.text__colors.tm} ${Styles.fonts.km}`}>
          {email}
        </Text>
        <Text className={`${styles.text__colors.tm} ${Styles.fonts.km}`}>
          {username}
        </Text>
      </View>
    </View>
  );
};
