import React, { SetStateAction, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';

import { Text } from '@EH/components';
import { tw } from '@EH/configs';
import { Color, TextVariant } from '@EH/constants';

import { FooterNavigation } from './FooterNavigation';
import { FooterText } from './FooterText';

interface FooterCardPropTypes {
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
  currentStep: number;
}

export function FooterCard({
  setCurrentStep,
  currentStep,
}: FooterCardPropTypes) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (currentStep) {
      case 0:
        setTitle('Explore Upcoming and Nearby Events');
        break;
      case 1:
        setTitle('Web Have Modern Events Calendar Feature');
        break;
      case 2:
        setTitle('To Look Up More Events or Activities Nearby By Map');
        break;
      default:
        // TODO:: Should redirect to the home page
        break;
    }
  }, [currentStep]);

  return (
    <View
      style={tw`bg-[${Color.PrimaryBlue.EH100}] h-[288px] p-10 rounded-t-[48px] justify-between absolute bottom-0 inset-x-0`}>
      <FooterText title={title} />
      <FooterNavigation
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    </View>
  );
}
