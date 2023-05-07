import React from 'react';

import { EventHubLogoSvg, MailIconSvg, RightArrowIconSvg,  PasswordIconSvg } from '@EH/assets';
import { Color } from '@EH/constants';

export interface SvgIconProps {
  color?: Color;
  width?: number | string; // Width and height to take the value as string. Eg: width={'100%'}
  height?: number | string;
}

export function MailIcon({ width = 22, height = 22 }: SvgIconProps) {
  return <MailIconSvg width={width} height={height} />;
}

export function EventHubLogo({ width = 125, height = 114 }: SvgIconProps) {
  return <EventHubLogoSvg width={width} height={height} />;
}

export function RightArrowIcon({ width = 13, height = 13 }: SvgIconProps) {
  return <RightArrowIconSvg width={width} height={height} />;
}

export function PasswordIcon({ width = 22, height = 22 }: SvgIconProps) {
  return <PasswordIconSvg width={width} height={height} />;
}
