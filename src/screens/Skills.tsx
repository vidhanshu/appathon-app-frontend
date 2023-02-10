import {Image, Pressable, Text, View} from 'react-native';
import React, {useCallback} from 'react';

import {Container} from '../components';
import {DATA} from '../constants/data';
import {SKILL_SCREEN} from '../constants';
import {ScreenProps} from '../@types';
import {ScrollView} from 'react-native';
import {Styles} from '../styles';
import {useAppSelector} from '../redux/hooks';

export function Skills({navigation, route}: ScreenProps) {
  const {styles, theme} = useAppSelector(state => state.theme);

  const SelectedInterests: string[] = route.params?.selectedInterests || [];
  const [skills, setSkills] = React.useState(
    DATA.filter(e => SelectedInterests.includes(e.name)),
  );
  const handleNextScreen = useCallback(
    (id: string) => {
      navigation.navigate(SKILL_SCREEN, {
        id,
      });
    },
    [navigation],
  );

  return (
    <Container className={`flex-1 gap-y-5 ${styles.bg__colors.bp}`}>
      <Text className={`${Styles.fonts.kb} ${styles.text__colors.tm} text-xl`}>
        Domains you have chosen
      </Text>
      <View className="mb-5">
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {SelectedInterests.map((e, i) => {
            return <Tag key={i} text={e} />;
          })}
        </ScrollView>
      </View>
      {/* rendering all the skills related to the domains chosen */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {skills.map(e => {
          const related_skills = e.related_skills;
          return related_skills.map((k, idx) => {
            return (
              <SkillCard
                id={k.id}
                image={k.image}
                name={k.name}
                onPress={handleNextScreen}
                key={idx}
              />
            );
          });
        })}
      </ScrollView>
    </Container>
  );
}

type TagProps = {
  text: string;
};
const Tag = ({text}: TagProps) => {
  const {styles} = useAppSelector(state => state.theme);
  return (
    <View
      className={`${styles.borders.bat} ${styles.bg__colors.bgpurplel} h-9 py-2 px-4 rounded-full max-w-fit mr-2`}>
      <Text className={`${Styles.fonts.km} ${styles.text__colors.tt}`}>
        {text}
      </Text>
    </View>
  );
};

type SkillCardProps = {
  id: string;
  name: string;
  image: string;
  onPress: (id: string) => void;
};
const SkillCard = ({image, name, id, onPress}: SkillCardProps) => {
  const {styles} = useAppSelector(state => state.theme);

  return (
    <Pressable
      onPress={() => onPress(id)}
      className={`${styles.borders.bat} mb-4 w-full px-2 py-4 rounded-md flex-row items-center`}>
      <Image className="w-8 h-8 rounded-full mr-4" source={{uri: image}} />
      <View className="flex-1 flex-row justify-between">
        <Text
          className={`${Styles.fonts.kb} ${styles.text__colors.tm} text-lg`}>
          {name}
        </Text>
        <Pressable
          onPress={() => onPress(id)}
          className="bg-blue-600 rounded-full">
          <Text className="text-white px-2 py-1 text-xs">Learn more</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
