import React from 'react';
import { Button } from 'react-native-paper';

import { Color } from '@EH/constants';

type RNPaperButtonProps = React.ComponentProps<typeof Button>;

export type WithRNPaperButtonProps = Pick<
  RNPaperButtonProps,
  'onPress' | 'testID' | 'disabled' | 'onLongPress' | 'uppercase'
>;

export interface ButtonProps extends WithRNPaperButtonProps {
  title: string;
  textColor?: Color;
  loading?: boolean;
  fullWidth?: boolean;
  
}
