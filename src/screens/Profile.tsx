import {Alert, RefreshControl, ScrollView, Text, View} from 'react-native';
import {Container, RoundedButton} from '../components';
import {DeleteUserHandler, LogoutUserHandler} from '../requests/handlers/Auth';
import React, {useCallback} from 'react';
import {ScreenProps, UserDataType} from '../@types';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

import Anticons from 'react-native-vector-icons/AntDesign';
import {EDIT_PROFILE_SCREEN} from '../constants';
/* eslint-disable react-hooks/exhaustive-deps */
import {GetUserProfileHandler} from '../requests/handlers/User';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import {Styles} from '../styles';
import {getTimeDifference} from '../utils';

export const Profile = ({route, navigation}: ScreenProps) => {
  const id = route.params;
  const [refreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [loadingDeletion, setLoadingDeletion] = React.useState(false);
  const token = useAppSelector(state => state.auth.token);
  const UserId = useAppSelector(state => state.auth.user?.id);
  const [profile, setProfile] = React.useState<UserDataType>(
    {} as UserDataType,
  );
  const dispatch = useAppDispatch();
  const getProfile = async () => {
    const res = await GetUserProfileHandler(id ?? UserId, token);
    setProfile(res);
  };

  React.useEffect(() => {
    getProfile();
  }, [id, UserId]);

  const handleEditProfile = useCallback(() => {
    navigation.navigate(EDIT_PROFILE_SCREEN, profile);
  }, [profile]);

  const logout = useCallback(async () => {
    setLoading(true);
    Alert.alert('Are you sure you want to logout?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          LogoutUserHandler(token || '', dispatch);
        },
      },
    ]);
    setLoading(false);
  }, []);

  const deleteAccount = useCallback(async () => {
    Alert.alert(
      'Are you sure you want to delete your account?',
      'This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            DeleteUserHandler(token || '', dispatch, setLoadingDeletion);
          },
        },
      ],
    );
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={getProfile}
          colors={[Styles.colors.lg_end]}
        />
      }>
      <Container className="flex-1 gap-y-5">
        <View className="p-2 rounded-md">
          <View>
            <View className="flex-row gap-x-2">
              <Anticons name="user" color={Styles.colors.lg_end} size={25} />
              <Text className={`text-black ${Styles.fonts.kb} text-xl`}>
                Name:
              </Text>
            </View>
            <Text className={`${Styles.fonts.km} text-base`}>
              {profile.name}
            </Text>
          </View>
          <View className="my-10">
            <View className="flex-row gap-x-2">
              <MCIcons
                name="identifier"
                color={Styles.colors.lg_end}
                size={25}
              />
              <Text className={`text-black ${Styles.fonts.kb} text-xl`}>
                Username:
              </Text>
            </View>
            <Text className={`${Styles.fonts.km} text-base`}>
              {profile.username}
            </Text>
          </View>
          <View>
            <View className="flex-row gap-x-2">
              <MIcons
                name="alternate-email"
                color={Styles.colors.lg_end}
                size={25}
              />
              <Text className={`text-black ${Styles.fonts.kb} text-xl`}>
                Email:
              </Text>
            </View>
            <Text className={`${Styles.fonts.km} text-base`}>
              {profile.email}
            </Text>
          </View>
          <View className="mt-10">
            <View className="flex-row gap-x-2">
              <Ionicons
                name="time-outline"
                color={Styles.colors.lg_end}
                size={25}
              />
              <Text className={`text-black ${Styles.fonts.kb} text-xl`}>
                Member since:
              </Text>
            </View>
            <Text className={`${Styles.fonts.km} text-base`}>
              {getTimeDifference(profile.registeredAt)}
            </Text>
          </View>
        </View>
        <RoundedButton
          variant="color"
          btn_color="green"
          onPress={handleEditProfile}
          title="Edit"
          className="mt-5"
        />
        <RoundedButton loading={loading} onPress={logout} title="Logout" />
        <RoundedButton
          loading={loadingDeletion}
          variant="color"
          btn_color="red"
          title="Delete"
          className="mt-5"
          onPress={deleteAccount}
        />
      </Container>
    </ScrollView>
  );
};
