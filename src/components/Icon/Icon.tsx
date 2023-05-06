import React from 'react';

import { MailIconSvg } from '@EH/assets';
import { Color } from '@EH/constants';

export interface SvgIconProps {
  color?: Color;
  width?: number | string; // Width and height to take the value as string. Eg: width={'100%'}
  height?: number | string;
}

export function MailIcon({
  width = 22,
  height = 22,
}: SvgIconProps) {
  return <MailIconSvg width={width} height={height}  />;
}
