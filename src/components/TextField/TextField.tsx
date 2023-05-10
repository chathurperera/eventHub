import React, { forwardRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInput } from 'react-native-paper';

import { tw } from '@EH/configs';
import { Color, TextVariant } from '@EH/constants';

import { TextFieldPropTypes } from './TextField.types';

export const TextField = forwardRef<RNTextInput, TextFieldPropTypes>(
  function AppTextField(
    {
      label,
      disabled,
      value,
      onBlur,
      onFocus,
      leftIcon,
      autoCorrect,
      onEndEditing,
      placeholder,
      disabledColor = Color.Neutral.EH100,
      activeOutlineColor = Color.Accent.EH100,
      secureTextEntry,
      textContentType,
      innerTextInputStyles = tw`h-12 p-0 m-0`,
    }: TextFieldPropTypes,
    ref,
  ) {
    return (
      <TextInput
        secureTextEntry={secureTextEntry}
        ref={ref}
        onEndEditing={onEndEditing}
        textContentType={textContentType}
        activeOutlineColor={activeOutlineColor}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        autoComplete="off"
        onBlur={onBlur}
        onFocus={onFocus}
        placeholderTextColor={Color.SecondaryCyan.EH700}
        outlineStyle={tw`rounded-xl border-[${Color.Neutral.EH200}]`}
        style={innerTextInputStyles}
        left={
          leftIcon && (
            <TextInput.Icon
              icon={() => leftIcon}
              style={{ marginTop: '50%' }}
            />
          )
        }
        label={label}
        disabled={disabled}
        value={value}
        mode="outlined"
      />
    );
  },
);
