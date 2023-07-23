import React from 'react';
import { Image, View } from 'react-native';

import { images } from '@EH/assets';
import { Text } from '@EH/components';
import { tw } from '@EH/configs';
import { TextVariant } from '@EH/constants';

export function SocialLogin() {
  return (
    <View>
      <View
        style={[
          tw`mb-2 justify-center items-center flex-row gap-4 rounded-3 py-3.75 shadow-xl bg-white`,
          {
            shadowColor: '#d3d4e2',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.21,
            shadowRadius: 8.19,
            elevation: 11,
          },
        ]}>
        <Image source={images.googleLogo} style={tw`w-6 h-6`} />
        <Text variant={TextVariant.Body1Regular}>Login with google</Text>
      </View>
      <View
        style={[
          tw`justify-center items-center flex-row gap-4 rounded-3 py-3.75 shadow-xl bg-white`,
          {
            shadowColor: '#d3d4e2',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.21,
            shadowRadius: 8.19,
            elevation: 11,
          },
        ]}>
        <Image source={images.facebookLogo} style={tw`w-6 h-6`} />
        <Text variant={TextVariant.Body1Regular}>Login with Facebook</Text>
      </View>
    </View>
  );
}
