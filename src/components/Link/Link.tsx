import React from 'react';

import { Color, TextVariant } from '@EH/constants';

import { Text } from '../Typography';
import { LinkPropTypes } from './link.types';

export function Link({
  text,
  underline = true,
  color = Color.DarkShade.EH100,
}: LinkPropTypes) {
  return (
    <Text variant={TextVariant.Link} underline={underline} color={color}>
      {text}
    </Text>
  );
}
