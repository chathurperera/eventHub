import React, { SetStateAction } from 'react';
import { Pressable, View } from 'react-native';

import { Text } from '@EH/components';
import { tw } from '@EH/configs';
import { Color, TextVariant } from '@EH/constants';

interface FooterNavigationPropTypes {
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
  currentStep:number
}

export function FooterNavigation({ setCurrentStep, currentStep }: FooterNavigationPropTypes) {
  const onSkipPress = () => setCurrentStep(3);

  const onNextPress = () => setCurrentStep(prev => (prev += 1));

  return (
    <View style={tw`flex-row justify-between`}>
      <Pressable onPress={onSkipPress} style={tw`opacity-50`}>
        <Text variant={TextVariant.Title1} color={Color.Neutral.White}>Skip </Text>
      </Pressable>
      <View style={tw`flex-row justify-between items-center gap-2`}>
        <View style={tw`h-2 w-2 rounded-full bg-[${currentStep === 0 ? Color.Neutral.White : Color.Neutral.EH100}]`} />
        <View style={tw`h-2 w-2 rounded-full bg-[${currentStep === 1 ? Color.Neutral.White : Color.Neutral.EH100}]`} />
        <View style={tw`h-2 w-2 rounded-full bg-[${currentStep === 2 ? Color.Neutral.White : Color.Neutral.EH100}]`} />
      </View>
      <Pressable onPress={onNextPress}>
        <Text variant={TextVariant.Title1} color={Color.Neutral.White}>Next </Text>
      </Pressable>
    </View>
  );
}
