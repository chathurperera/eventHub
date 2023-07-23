import React from 'react';

import { Color, TextVariant } from '@EH/constants';

import { Text } from '../Typography';
import { LinkPropTypes } from './link.types';

export function Link({
  text,
  underline = true,
  color = Color.PrimaryBlue.EH100,
  onPress,
}: LinkPropTypes) {
  return (
    <Text
      onPress={onPress}
      variant={TextVariant.Link}
      underline={underline}
      color={color}>
      {text}
    </Text>
  );
}
