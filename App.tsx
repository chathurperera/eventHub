import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { tw } from '@EH/configs';

import { Routes } from './src/routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log('app');
  }, []);
  return (
    <View style={tw`flex-1`}>
      <Routes />
    </View>
  );
};

export default App;
