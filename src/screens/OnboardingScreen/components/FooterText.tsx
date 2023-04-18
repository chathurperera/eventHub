import React from 'react';
import { View } from 'react-native';

import { Text } from '@EH/components';
import { tw } from '@EH/configs';
import { Color, TextVariant } from '@EH/constants';

interface FooterTextPropTypes {
  title: string;
}

export function FooterText({ title }: FooterTextPropTypes) {
  return (
    <View>
      <View style={tw`mb-4`}>
        <Text variant={TextVariant.Heading5} color={Color.Neutral.White}>
          {title}
        </Text>
      </View>
      <Text variant={TextVariant.Body1Regular} color={Color.Neutral.White}>
        In publishing and graphic design, Lorem is a placeholder text commonly
      </Text>
    </View>
  );
}
