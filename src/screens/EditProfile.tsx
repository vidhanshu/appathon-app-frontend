import {Container, RoundedButton, RoundedInput} from '../components';
import React, {useCallback} from 'react';
import {ScreenProps, UserDataTypeForUpdate} from '../@types';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

import {ScrollView} from 'react-native';
import {UpdateUserHandler} from '../requests/handlers/Auth';

export function EditProfile({route}: ScreenProps) {
  const [loading, setLoading] = React.useState(false);
  const token = useAppSelector(state => state.auth.token);
  const [editProfileDetails, setEditProfileDetails] =
    React.useState<UserDataTypeForUpdate>({
      id: route.params.id,
      email: route.params.email,
      name: route.params.name,
      username: route.params.username,
      password: route.params.password || '',
    });
  const dispatch = useAppDispatch();
  const handleNameChange = useCallback((text: string) => {
    setEditProfileDetails(prev => ({...prev, name: text}));
  }, []);
  const handleUsernameChange = useCallback((text: string) => {
    setEditProfileDetails(prev => ({...prev, username: text}));
  }, []);
  const handleEmailChange = useCallback((text: string) => {
    setEditProfileDetails(prev => ({...prev, email: text}));
  }, []);
  const handlePasswordChange = useCallback((text: string) => {
    setEditProfileDetails(prev => ({...prev, password: text}));
  }, []);

  const updateProfile = useCallback(async () => {
    await UpdateUserHandler(
      token,
      editProfileDetails,
      dispatch,
      setLoading,
      route.params,
    );
  }, [editProfileDetails, token, dispatch, route.params]);

  return (
    <ScrollView className="flex-1">
      <Container>
        <RoundedInput
          label="Name"
          placeholder="Name"
          value={editProfileDetails.name}
          onChangeText={handleNameChange}
        />
        <RoundedInput
          label="Username"
          placeholder="Username"
          value={editProfileDetails.username}
          onChangeText={handleUsernameChange}
          classOuterName="my-5"
        />
        <RoundedInput
          label="Email"
          placeholder="Email"
          value={editProfileDetails.email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          classOuterName="mb-5"
        />
        <RoundedInput
          label="Password"
          placeholder="Password"
          value={editProfileDetails.password}
          onChangeText={handlePasswordChange}
          secureTextEntry
          classOuterName="mb-10"
        />
        <RoundedButton
          onPress={updateProfile}
          loading={loading}
          title="Update"
        />
      </Container>
    </ScrollView>
  );
}
