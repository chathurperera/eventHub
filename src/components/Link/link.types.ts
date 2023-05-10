import { Text } from 'react-native';

import { Color } from '@EH/constants';

type RNTextProps = React.ComponentProps<typeof Text>;

export type WithRNLinkProps = Pick<RNTextProps, 'onPress' | 'testID' | 'onPress'>;

export interface LinkPropTypes extends WithRNLinkProps {
  text: string;
  underline: boolean;
  color?: Color;  
}

