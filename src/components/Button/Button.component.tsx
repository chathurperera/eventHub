import React from 'react';
import { View } from 'react-native';
import { Button as RNPaperButton } from 'react-native-paper';

import { Text } from '../Typography';
import { tw } from '@EH/configs';
import { TextVariant } from '@EH/constants';

import { ButtonProps } from './Button.types';

export function Button({ title, onPress }: ButtonProps) {
  return (
    <View style={tw`flex-row`}>
      <RNPaperButton mode="outlined" onPress={onPress}>
        <Text variant={TextVariant.Body1Regular}>{title}</Text>
      </RNPaperButton>
    </View>
  );
}
