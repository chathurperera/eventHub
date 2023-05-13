import { Color } from '@EH/constants';
import React, { ComponentProps } from 'react';
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
  leftIcon?: React.ReactNode,
  placeholder?: string;
  helperTextColor?: Color;
  textColor?: Color;
  backgroundColor?: Color;
  outlineColor?: Color;
  activeOutlineColor?: Color;
  disabled?: boolean;
  secureTextEntry?: boolean;
  value?: string;
  helperText?: string;
  disabledColor?:Color;
  error:boolean
}
