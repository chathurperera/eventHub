import { View, Text } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Onboarding from 'react-native-onboarding-swiper';

import { FooterCard } from './components/FooterCard';

export function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <View style={tw`relative flex-1 border border-red-600`}>
      {/* <Onboarding pages  /> */}
      <FooterCard />
    </View>
  );
}
