import React, { PropsWithChildren } from 'react';
import { Text as RNText } from 'react-native';

import { tw } from '@EH/configs';
import { Color, TextAlignment } from '@EH/constants';

import { AppTextStyles, getAppTextStyles } from './AppText.config';
import { AppTextProps } from './AppText.types';

export function Text({
  color = Color.DarkShade.EH100,
  variant,
  textAlign = TextAlignment.Center,
  numberOfLines,
  underline,
  testID,
  children,
  onPress,
}: PropsWithChildren<AppTextProps>) {
  const variantStyle = AppTextStyles[variant];

  let textStyles = getAppTextStyles(variant);

  if (underline) {
    textStyles += ' underline';
  }

  textStyles += ` text-${textAlign}`;

  // const lineHeight: number = Number.parseFloat(
  //   variantStyle.lineHeight.toString().replace('px', ''),
  // );

  return (
    <RNText
      style={[
        {
          color,
          // lineHeight: lineHeight,
        },
        tw`${textStyles}`,
      ]}
      testID={testID}
      onPress={onPress}
      numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
}
