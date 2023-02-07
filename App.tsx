import {SafeAreaView, StatusBar} from 'react-native';

import {AppStack} from './src/stacks';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/redux/store';

const App = () => {
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
