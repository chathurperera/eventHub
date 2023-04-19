import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { LoginScreen, OnboardingScreen } from '@EH/screens';
import { Route } from '@EH/constants';

const Stack = createNativeStackNavigator();

export function Routes() {
  const [isInitialLaunch, setIsInitialLaunch] = useState(false);

  useEffect(() => {
    async function setAppLaunch() {
      const appData = await AsyncStorage.getItem('appLaunched');
      if (appData == null) {
        setIsInitialLaunch(true);
        AsyncStorage.setItem('appLaunched', 'false');
      } else {
        setIsInitialLaunch(false);
      }
    }
    setAppLaunch();
  }, []);

  return (
    <NavigationContainer
    // onReady={() => {
    //   SplashScreen.hide();
    // }}
    >
      <Stack.Navigator
        initialRouteName={isInitialLaunch ? Route.Onboarding : Route.Login}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Route.Login} component={LoginScreen} />
        <Stack.Screen name={Route.Onboarding} component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
