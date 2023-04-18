import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Routes } from './src/routes';
import tw from 'twrnc';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log('app');
  }, []);
  return (
    <View style={tw`flex-1`}>
      <Routes />
      {/* <Text>Helloo</Text> */}
    </View>
  );
};

export default App;
