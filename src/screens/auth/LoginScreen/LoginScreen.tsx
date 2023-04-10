import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

export function LoginScreen() {
  useEffect(() => {
    SplashScreen.hide();
  },[])
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}