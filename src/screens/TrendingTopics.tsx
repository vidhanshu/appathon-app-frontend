import {Image, ScrollView, Text, View} from 'react-native';

import {Container} from '../components';
import React from 'react';
import {TRENDING_TOPICS} from '../constants/data';
import {useAppSelector} from '../redux/hooks';

export function TrendingTopics() {
  const {styles} = useAppSelector(state => state.theme);

  return (
    <Container className={`${styles.bg__colors.bp} flex-1 py-2`}>
      <ScrollView
        className="flex-1 gap-y-5"
        showsVerticalScrollIndicator={false}>
        {TRENDING_TOPICS.map((topic, index) => {
          return (
            <View
              key={index}
              className={`p-4 ${styles.borders.bat} rounded-md`}>
              <View className={'flex-row items-center justify-between'}>
                <View className="flex-row">
                  <Image
                    className="w-8 h-8 rounded-full mr-5"
                    source={{uri: topic.image}}
                  />
                  <Text className={`${styles.text__colors.tm} text-xl`}>
                    {topic.name}
                  </Text>
                </View>
                <Text className={`${styles.text__colors.txt} text-xl`}>
                  #{1 + index}
                </Text>
              </View>
              <View className={`${styles.borders.bbt} my-5`} />
              <Text className={`${styles.text__colors.txt} text-base`}>
                {topic.description}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </Container>
  );
}
