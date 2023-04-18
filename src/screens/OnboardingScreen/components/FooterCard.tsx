import { View } from 'react-native';
import React from 'react';
import {tw} from '@EH/configs';
import { Text } from '@EH/components';
import { TextVariant } from '@EH/constants';

interface FooterCardPropTypes {}

export function FooterCard() {
  return (
    <View style={tw`p-10 border border-cyan-700 absolute bottom-0 inset-x-0`}>
      <View>
        <Text variant={TextVariant.Heading4}>
          Explore Upcoming and Nearby Events
        </Text>
        <Text variant={TextVariant.Body1Regular}>
          In publishing and graphic design, Lorem is a placeholder text commonly{' '}
        </Text>
      </View>
    </View>
  );
}
