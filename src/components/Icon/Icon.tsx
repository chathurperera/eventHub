import React from 'react';

import { EventHubLogoSvg, MailIconSvg, PasswordIconSvg } from '@EH/assets';
import { Color } from '@EH/constants';

export interface SvgIconProps {
  color?: Color;
  width?: number | string; // Width and height to take the value as string. Eg: width={'100%'}
  height?: number | string;
}

export function MailIcon({ width = 22, height = 22 }: SvgIconProps) {
  return <MailIconSvg width={width} height={height} />;
}

export function EventHubLogo({ width = 163, height = 114 }: SvgIconProps) {
  return <EventHubLogoSvg width={width} height={height} />;
}

export function PasswordIcon({ width = 22, height = 22 }: SvgIconProps) {
  return <PasswordIconSvg width={width} height={height} />;
}
