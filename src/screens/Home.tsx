import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Container, RoundedButton} from '../components';
import {Domain, ScreenProps} from '../@types';
import React, {useCallback} from 'react';

import {DATA} from '../constants/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SKILLS_SCREEN} from '../constants';
import {Styles} from '../styles';
import {useAppSelector} from '../redux/hooks';

export const Home = ({navigation}: ScreenProps) => {
  const {styles, theme} = useAppSelector(state => state.theme);
  const [search, setSearch] = React.useState<string>('');
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>(
    [],
  );
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
  const onSelectInterest = useCallback((interest: string) => {
    setSelectedInterests(prev => {
      if (prev.includes(interest)) {
        return prev.filter(item => item !== interest);
      }
      return [...prev, interest];
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

  return (
    <Container className={`flex-1 gap-y-5 ${styles.bg__colors.bp}`}>
      <Text className={`${Styles.fonts.kb} ${styles.text__colors.tm} text-xl`}>
        Choose Your Area of interests
      </Text>
      <View
        className={`${styles.borders.bat} flex-row items-center px-2 rounded-md`}>
        <Ionicons name="search-outline" size={24} color="gray" />
        <TextInput
          placeholder="Type area of interest..."
          className={`${Styles.fonts.km} ml-2 w-full ${styles.text__colors.tm} flex-1 ${styles.text__colors.tm}}`}
          onChangeText={handleInterestChange}
          placeholderTextColor={theme === 'light' ? 'gray' : 'white'}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredInterests.map((aoi, index) => (
          <DomainCard {...aoi} onSelect={onSelectInterest} key={index} />
        ))}
      </ScrollView>
      <RoundedButton onPress={handleExplore} title="Explore skills" />
    </Container>
  );
};

type DomainCardProp = Domain & {
  onSelect: (skill: string) => void;
};
export const DomainCard = ({image, name, onSelect}: DomainCardProp) => {
  const [selected, setselected] = React.useState<boolean>(false);
  const {styles} = useAppSelector(state => state.theme);

  return (
    <Pressable
      onPress={() => {
        onSelect(name);
        setselected(prev => !prev);
      }}
      className={`${styles.borders.bat} p-4 flex-row  items-center rounded-md mb-2`}>
      {selected ? (
        <View className="h-10 w-10 rounded-full mr-5">
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
