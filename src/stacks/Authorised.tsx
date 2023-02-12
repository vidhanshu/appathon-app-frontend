import {
  EDIT_PROFILE_SCREEN,
  HOME_SCREEN,
  HOME_TAB,
  PROFILE_TAB,
  SEARCH_USERS_TAB,
  SETTINGS_SCREEN,
  SKILLS_SCREEN,
  SKILL_SCREEN,
  TRENDING_TOPICS_TAB,
} from '../constants';
import {
  EditProfile,
  Home,
  Profile,
  SearchUser,
  Settings,
  Skill,
  Skills,
  TrendingTopics,
} from '../screens';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Styles} from '../styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '../redux/hooks';

const Stack = createNativeStackNavigator();
export function Authorised() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 10,
        headerStyle: {
          backgroundColor: Styles.colors.primary,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name={HOME_SCREEN} component={HomeTabs} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Settings',
        }}
        name={SETTINGS_SCREEN}
        component={Settings}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Skills',
        }}
        name={SKILLS_SCREEN}
        component={Skills}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Skill',
        }}
        name={SKILL_SCREEN}
        component={Skill}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
        }}
        name={EDIT_PROFILE_SCREEN}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
  const {theme} = useAppSelector(state => state.theme);
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
        },
        tabBarIcon: ({focused}) => {
          let iconName = '';
          let routeName = route.name;

          switch (routeName) {
            case HOME_TAB:
              iconName = focused ? 'home' : 'home-outline';
              break;
            case PROFILE_TAB:
              iconName = focused ? 'person' : 'person-outline';
              break;
            case TRENDING_TOPICS_TAB:
              iconName = focused ? 'trending-up' : 'trending-up-outline';
              break;
            case SEARCH_USERS_TAB:
              iconName = focused ? 'search' : 'search-outline';
              break;
            default:
              iconName = focused ? 'home' : 'home-outline';
              break;
          }
          return <Ionicons name={iconName} size={20} color={'#4b4fdb'} />;
        },
        tabBarLabelStyle: {
          color: Styles.colors.primary,
        },
        headerStyle: {
          backgroundColor: Styles.colors.primary,
        },
        headerTitleStyle: {
          color: '#fff',
          marginLeft: 10,
        },
      })}>
      <Tabs.Screen name={HOME_TAB} component={Home} />
      <Tabs.Screen name={TRENDING_TOPICS_TAB} component={TrendingTopics} />
      <Tabs.Screen name={SEARCH_USERS_TAB} component={SearchUser} />
      <Tabs.Screen name={PROFILE_TAB} component={Profile} />
    </Tabs.Navigator>
  );
};
