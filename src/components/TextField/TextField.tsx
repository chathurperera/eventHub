import React, { useMemo } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInput } from 'react-native-paper';

import { tw } from '@EH/configs';

import { TextFieldPropTypes } from './TextField.types';
import { Color, TextVariant } from '@EH/constants';


export function TextField({
  label,
  disabled,
  value,
  placeholder,
  innerTextInputStyles = tw`h-12 p-0 m-0`,
}: TextFieldPropTypes) {
  
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Color.SecondaryCyan.EH700}
      outlineStyle={tw`rounded-xl border-[${Color.Neutral.EH200}]`}
      style={innerTextInputStyles}
      // left={}
      label={label}
      disabled={disabled}
      value={value}
      mode="outlined"
    />
  );
}
