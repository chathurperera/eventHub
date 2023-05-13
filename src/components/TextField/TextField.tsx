import React, { cloneElement, forwardRef, useMemo } from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { tw } from '@EH/configs';
import { Color, TextAlignment, TextVariant } from '@EH/constants';

import { Text } from '../Typography';
import { TextFieldPropTypes } from './TextField.types';

//TODO::handle scroll on focus
export const TextField = forwardRef<RNTextInput, TextFieldPropTypes>(function AppTextField(
  {
    innerTextInputStyles = tw`h-8 px-0 py-2 m-0`,
    backgroundColor = Color.Transparency.full,
    defaultValue,
    value,
    disabled = false,
    helperText,
    helperTextColor = Color.Neutral.EH200,
    leftIcon,
    onChangeText,
    onBlur,
    onFocus,
    rightIcon = null,
    secureTextEntry,
    testID,
    // textColor = Color.Neutral.Sz300,
    // disabledColor = Color.Neutral.Sz700,
    blurOnSubmit,
    onSubmitEditing,
    activeOutlineColor = Color.PrimaryBlue.EH500,
    outlineColor = Color.Neutral.EH200,
    onEndEditing,
    maxLength,
    keyboardType,
    textColor = Color.DarkShade.EH100,
    error,
    placeholder,
    autoCapitalize,
    textContentType,
    autoComplete,
    disabledColor,
    onRightIconPress,
    autoCorrect,
    multiline,
    numberOfLines,
    returnKeyType,
    returnKeyLabel,
  }: TextFieldPropTypes,
  ref,
) {
  // 

  const helperTextComponent = useMemo(
    () => (
      <Text
        variant={TextVariant.Subtitle1}
        color={error ? Color.Error.EHMain : helperTextColor}
        textAlign={TextAlignment.Auto}>
        {helperText}
      </Text>
    ),
    [helperText, helperTextColor, error],
  );

  const leftIconComponent = useMemo(() => {
    return (
      leftIcon &&
      cloneElement(leftIcon as any, {
        ...(disabled && { color: disabledColor }),
      })
    );
  }, [leftIcon, disabled]);

  const rightIconComponent = useMemo(() => {
    return (
      rightIcon &&
      cloneElement(rightIcon as any, {
        ...(disabled && { color: disabledColor }),
      })
    );
  }, [rightIcon, disabled]);

  return (
    <View>
      <TextInput
        style={innerTextInputStyles}
        ref={ref}
        mode="outlined"
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        textContentType={textContentType}
        disabled={disabled}
        autoComplete={autoComplete}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        onEndEditing={onEndEditing}
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
        theme={{
          colors: {
            primary: Color.DarkShade.EH100,
            placeholder: Color.SecondaryCyan.EH700,
            text: disabled ? Color.Neutral.EH200 : textColor,
            background: backgroundColor,
            disabled: Color.DarkShade.EH500,
          },
          roundness: 10,
          fonts: {
            regular: tw`text-[16px] font-normal p-0 leading-[18px]`,
          },
        }}
        keyboardType={keyboardType}
        blurOnSubmit={blurOnSubmit}
        testID={testID}
        outlineColor={error ? Color.Accent.EH100 : outlineColor}
        activeOutlineColor={error ? Color.PrimaryBlue.EH500 : activeOutlineColor}
        autoCorrect={autoCorrect}
        multiline={multiline}
        numberOfLines={numberOfLines}
        left={leftIcon && <TextInput.Icon icon={() => leftIconComponent} style={tw`mt-[50%]`} />}
        right={
          rightIcon && (
            <TextInput.Icon icon={() => rightIconComponent} onPress={onRightIconPress} style={tw`mt-[50%]`} />
          )
        }
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
      />
      {helperText && helperTextComponent}
    </View>
  );
});
