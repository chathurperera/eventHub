import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import tw from 'twrnc';

export function LoginScreen() {
  useEffect(() => {
    // SplashScreen.hide();
    console.log('login')
  },[])
  return (
    <View style={tw`p-8 `}>
      <Text>LoginScreen</Text>
    </View>
  )
}