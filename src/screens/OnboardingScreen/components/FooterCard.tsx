import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';

import { Text } from '@EH/components';
import { tw } from '@EH/configs';
import { Color, TextVariant } from '@EH/constants';

import { FooterNavigation } from './FooterNavigation';
import { FooterText } from './FooterText';

interface FooterCardPropTypes {}

export function FooterCard() {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (step) {
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
  }, [step]);

  return (
    <View
      style={tw`bg-[${Color.PrimaryBlue.EH100}] h-[288px] p-10 rounded-t-[48px] justify-between absolute bottom-0 inset-x-0`}>
      <FooterText title={title} />
      <FooterNavigation setStep={setStep} step={step}/>
    </View>
  );
}
