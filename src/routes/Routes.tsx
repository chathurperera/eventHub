import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { AsyncStorageService } from '@EH/services';

import { Route, StorageKeys } from '@EH/constants';
import { LoginScreen, OnboardingScreen, HomeScreen, LoginScreenProps,  } from '@EH/screens';

export type AppStackParamList = {
  [Route.Login]: {};
  [Route.Onboarding]: undefined;
  [Route.Home]:undefined
};

const Stack = createNativeStackNavigator<AppStackParamList>();

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
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isInitialLaunch ? Route.Onboarding : Route.Login}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Route.Login} component={LoginScreen} />
        <Stack.Screen name={Route.Onboarding} component={OnboardingScreen} />
        <Stack.Screen name={Route.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
