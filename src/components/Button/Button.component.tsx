import React from 'react';
import { View } from 'react-native';
import { Button as RNPaperButton } from 'react-native-paper';

import { tw } from '@EH/configs';
import { TextVariant } from '@EH/constants';

import { Text } from '../Typography';
import { ButtonProps } from './Button.types';

export function Button({
  title,
  onPress,
  loading,
  fullWidth = false,
}: ButtonProps) {
  return (
    <View style={tw`flex-row`}>
      <RNPaperButton
        mode="outlined"
        onPress={onPress}
        loading={loading}
        style={tw`${fullWidth ? 'w-full' : ''}`}>
        <Text variant={TextVariant.Body1Regular}>{title}</Text>
      </RNPaperButton>
    </View>
  );
}
