import { ComponentProps } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native/types';

type RNTextInputProps = ComponentProps<typeof TextInput>;

type WithRNTextInputProps = Pick<
  RNTextInputProps,
  | 'defaultValue'
  | 'value'
  | 'disabled'
  | 'label'
  | 'placeholder'
  | 'onChangeText'
  | 'onBlur'
  | 'onFocus'
  | 'secureTextEntry'
  | 'maxLength'
  | 'label'
  | 'keyboardType'
  | 'onSubmitEditing'
  | 'onEndEditing'
  | 'blurOnSubmit'
  | 'autoCapitalize'
  | 'textContentType'
  | 'autoComplete'
  | 'testID'
  | 'autoCorrect'
  | 'numberOfLines'
  | 'multiline'
  | 'returnKeyType'
  | 'returnKeyLabel'
>;

export interface TextFieldPropTypes extends WithRNTextInputProps {
  innerTextInputStyles?: StyleProp<ViewStyle>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
}
