import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Container, RoundedButton, SearchBar} from '../components';
import {Domain, OnSelectProp, ScreenProps} from '../@types';
import React, {useCallback} from 'react';

import Anticons from 'react-native-vector-icons/AntDesign';
import {DATA} from '../constants/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SKILLS_SCREEN} from '../constants';
import {Styles} from '../styles';
import {useAppSelector} from '../redux/hooks';

export const Home = ({navigation}: ScreenProps) => {
  const {styles, theme} = useAppSelector(state => state.theme);
  const [search, setSearch] = React.useState<string>('');
  const [selectedInterests, setSelectedInterests] = React.useState<
    OnSelectProp[]
  >([]);
  //inital filtered interests
  const [filteredInterests, setFilteredInterests] =
    React.useState<Domain[]>(DATA);
  //to filter the interests
  const handleInterestChange = useCallback((text: string) => {
    setSearch(text);
    setFilteredInterests(() => {
      return DATA.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
    });
  }, []);
  //to select the interests
  const onSelectInterest = useCallback(({id, name}: OnSelectProp) => {
    setSelectedInterests(prev => {
      if (prev.find(e => e.id === id)) {
        return prev.filter(e => e.id !== id);
      }
      return [...prev, {id, name}];
    });
  }, []);
  //to navigate to next screen
  const handleExplore = useCallback(() => {
    if (selectedInterests.length === 0) {
      Alert.alert(
        'Select atleast one',
        "You can't explore without selecting atleast one interest",
      );
      return;
    }
    navigation.navigate(SKILLS_SCREEN, {selectedInterests});
  }, [selectedInterests, navigation]);
  //to clear the search
  const onCutHandler = useCallback(() => {
    setSearch('');
    setFilteredInterests(DATA);
  }, []);

  return (
    <Container className={`flex-1 gap-y-5 ${styles.bg__colors.bp}`}>
      <Text className={`${Styles.fonts.kb} ${styles.text__colors.tm} text-xl mb-5`}>
        Choose Your Area of interests
      </Text>
      <SearchBar
        onChange={handleInterestChange}
        search={search}
        onCutHandler={onCutHandler}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredInterests.map(aoi => (
          <DomainCard {...aoi} onSelect={onSelectInterest} key={aoi.id} />
        ))}
      </ScrollView>
      <RoundedButton onPress={handleExplore} title="Explore skills" />
    </Container>
  );
};

type DomainCardProp = Domain & {
  onSelect: ({id, name}: OnSelectProp) => void;
};
export const DomainCard = ({image, name, id, onSelect}: DomainCardProp) => {
  const [selected, setselected] = React.useState<boolean>(false);
  const {styles} = useAppSelector(state => state.theme);

  return (
    <Pressable
      onPress={() => {
        onSelect({id, name});
        setselected(prev => !prev);
      }}
      className={`${styles.borders.bat} p-4 flex-row  items-center rounded-md mb-2`}>
      {selected ? (
        <View className="h-10 w-10 rounded-full mr-5 ">
          <Ionicons name="checkmark-circle" size={42} color="green" />
        </View>
      ) : (
        <Image
          className="h-10 w-10 rounded-full mr-5"
          source={{
            uri: image,
          }}
        />
      )}
      <Text
        className={`${Styles.fonts.km} ${styles.text__colors.tm} text-base`}>
        {name}
      </Text>
    </Pressable>
  );
};
