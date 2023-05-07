import React from 'react';
import { View } from 'react-native';
import { Button as RNPaperButton } from 'react-native-paper';

import { tw } from '@EH/configs';
import { Color, TextVariant } from '@EH/constants';

import { RightArrowIcon } from '../Icon';
import { Text } from '../Typography';
import { ButtonProps } from './Button.types';

export function Button({
  title,
  onPress,
  loading,
  fullWidth = true,
  uppercase = true,
}: ButtonProps) {
  return (
    <View style={tw`flex-row relative`}>
      <RNPaperButton
        mode="outlined"
        onPress={onPress}
        uppercase={uppercase}
        loading={loading}
        contentStyle={tw`h-12`}
        buttonColor={Color.PrimaryBlue.EH100}
        style={tw`${fullWidth ? 'w-full' : ''} py-1 rounded-3.75 `}>
        <Text variant={TextVariant.Title2} color={Color.Neutral.White}>
          {title}
        </Text>
      </RNPaperButton>
      <View
        style={tw`w-7.5 h-7.5 rounded bg-[${Color.PrimaryBlue.EH200}] rounded-[15px] justify-center items-center absolute right-3.75 bottom-3.75`}>
        <RightArrowIcon />
      </View>
    </View>
  );
}
