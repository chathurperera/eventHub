import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, OnboardingScreen } from '@EH/screens';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer
    // onReady={() => {
    //   SplashScreen.hide();
    // }}
    >
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
