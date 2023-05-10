import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import { Route, StorageKeys } from '@EH/constants';
import {
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  SignupScreen,
} from '@EH/screens';
import { AsyncStorageService } from '@EH/services';

export type AppStackParamList = {
  [Route.Login]: undefined;
  [Route.Onboarding]: undefined;
  [Route.Home]: undefined;
  [Route.Signup]: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export function Routes() {
  const [isInitialLaunch, setIsInitialLaunch] = useState(false);

  useEffect(() => {
    async function setAppLaunch() {
      const appData = AsyncStorageService.getItem(StorageKeys.AppLaunched);
      if (appData == null) {
        setIsInitialLaunch(true);
        AsyncStorageService.setItem(StorageKeys.AppLaunched, 'true');
      } else {
        setIsInitialLaunch(false);
      }
    }
    setAppLaunch();
  }, []);

  return (
    //TODO:: figure out a way to use enum values instead of hard coded strings
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName={isInitialLaunch ? Route.Onboarding : Route.Login}
        screenOptions={{
          headerShown: false,
          headerStyle: {},
        }}>
        <Stack.Screen name={Route.Login} component={LoginScreen} />
        <Stack.Screen name={Route.Signup} component={SignupScreen} />
        <Stack.Screen name={Route.Onboarding} component={OnboardingScreen} />
        <Stack.Screen name={Route.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
