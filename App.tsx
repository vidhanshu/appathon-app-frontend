import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {AppStack} from './src/stacks';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from './src/redux/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView className="flex flex-1">
      <StatusBar />
      <NavigationContainer>
        <Provider store={store}>
          <AppStack />
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
