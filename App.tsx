import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Routes } from './src/routes';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide()
    console.log('app')
  },[])
  return (
    <View>
      <Routes />
    </View>
  );
};

export default App;
