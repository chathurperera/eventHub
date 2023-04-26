import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Image, SafeAreaView, TextInput, View } from 'react-native';

import { Button, Text } from '@EH/components';
import { tw } from '@EH/configs';
import { TextAlignment, TextVariant } from '@EH/constants';

import { LoginFormValues } from './login.interface';

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit: SubmitHandler<LoginFormValues> = data =>
    console.log('data', data);

  return (
    <SafeAreaView>
      <View style={tw`p-8`}>
        <View style={tw`pt-8`}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={tw`mx-auto w-40`}
          />
        </View>
        <View style={tw`my-4`}>
          <Text variant={TextVariant.Heading3} textAlign={TextAlignment.Left}>
            Login
          </Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                onChangeText={value => onChange(value)}
                value={value}
                onBlur={onBlur}
                style={tw`border mb-2 p-3`}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                onChangeText={value => onChange(value)}
                value={value}
                onBlur={onBlur}
                secureTextEntry
                style={tw`border p-3`}
              />
            )}
          />
        </View>
        <Button title='Login' />
      </View>
    </SafeAreaView>
  );
}
