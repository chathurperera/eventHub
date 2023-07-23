import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { tw } from '@EH/configs';

import { FooterCard } from './components/FooterCard';

export function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <View style={tw`relative flex-1`}>
      <View style={tw`pt-4 items-center`}>
        <Image
          source={
            currentStep === 0
              ? require('../../assets/images/onboardingStepOne.png')
              : currentStep === 1
              ? require('../../assets/images/onboardingStepTwo.png')
              : require('../../assets/images/onboardingStepThree.png')
          }
        />
      </View>
      <FooterCard currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </View>
  );
}
