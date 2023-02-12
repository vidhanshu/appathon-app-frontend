import {HOW_TO_LEARN, MASTERS, SKILLS_DETAILS} from '../constants/data';
import {HowToLearn, ScreenProps, SkillType} from '../@types';
import {Image, Linking, Pressable, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';

import {Container} from '../components';
import {Styles} from '../styles';
import {stringShortener} from '../utils';
import {useAppSelector} from '../redux/hooks';

export function Skill({route}: ScreenProps) {
  const {styles} = useAppSelector(state => state.theme);

  const {id} = route.params || {};
  const [skill] = useState<SkillType>(
    SKILLS_DETAILS.filter(e => e.id === id)[0] ?? ({} as SkillType),
  );
  const [howToLearn] = useState<HowToLearn[]>(
    HOW_TO_LEARN.filter(e => e.skill_id === id),
  );

  return (
    <ScrollView className={`flex-1 ${styles.bg__colors.bp}`}>
      <Container>
        <View className={`${styles.borders.bat} rounded-md p-4`}>
          <Image
            resizeMode="contain"
            className={'h-60 rounded-md'}
            source={{
              uri: skill.image,
            }}
          />
        </View>
        <Text
          className={`${Styles.fonts.kb} mb-4 mt-10 text-3xl ${styles.text__colors.tm}`}>
          {skill.name}
        </Text>
        <Text
          className={`${Styles.fonts.km} text-base  ${styles.text__colors.tt}`}>
          {skill.introduction}
        </Text>
        <Text
          className={`${Styles.fonts.kb} mb-4 mt-10 text-3xl ${styles.text__colors.tm}`}>
          History
        </Text>
        <Text
          className={`${Styles.fonts.km} text-base  ${styles.text__colors.tt}`}>
          {skill.history}
        </Text>
        <Text
          className={`${Styles.fonts.kb} mb-4 mt-10 text-3xl ${styles.text__colors.tm}`}>
          Masters
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {MASTERS.filter(e => e.teaches.includes(skill.name)).map((e, i) => {
            return (
              <View
                key={i}
                className={`${styles.borders.bat} rounded-md p-4 mr-2`}>
                <Image
                  key={i}
                  className="h-28 w-28 rounded-full mr-4 m-auto"
                  source={{uri: e.image}}
                />
                <Text
                  className={`${Styles.fonts.kb} mt-4 text-center text-lg ${styles.text__colors.tp}`}>
                  {e.name}
                </Text>
                <Text
                  className={`${Styles.fonts.km} text-center text-base ${styles.text__colors.txt}`}>
                  {e.domain}
                </Text>
                <Text
                  className={`${Styles.fonts.km} text-center text-base text-blue-500`}>
                  {e.experience} yr+ xp
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <Text
          className={`${Styles.fonts.kb} mt-10 mb-4 text-3xl ${styles.text__colors.tm}`}>
          How to learn
        </Text>
        <ScrollView>
          <View className="w-full">
            {howToLearn.map((e, kd) => {
              return <HowToLearnCard key={kd} {...e} />;
            })}
          </View>
        </ScrollView>
      </Container>
    </ScrollView>
  );
}

const HowToLearnCard = ({
  created_at,
  image,
  link,
  name,
  platform,
  description,
}: HowToLearn) => {
  const {styles} = useAppSelector(state => state.theme);

  return (
    <Pressable
      onPress={() => {
        Linking.openURL(link);
      }}
      className={`${styles.borders.bat} mb-5 p-2`}>
      <View className="flex-row  items-center">
        <Image
          resizeMode="contain"
          source={{uri: image}}
          className="w-32 h-32 self-center"
        />
        <View className="ml-5 flex-1 justify-center">
          <Text
            className={`${Styles.fonts.kb} text-base ${styles.text__colors.tm}`}>
            {name}
          </Text>
          <Text
            className={`${Styles.fonts.km} text-xs ${styles.text__colors.txt}`}>
            {stringShortener(description, 50)}
          </Text>
          <Text className={`${Styles.fonts.km} text-base text-blue-500`}>
            {platform}
          </Text>
          <Text
            className={`${Styles.fonts.km} text-base ${styles.text__colors.tp}`}>
            {created_at}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
