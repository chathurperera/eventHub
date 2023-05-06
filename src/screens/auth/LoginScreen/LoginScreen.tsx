import { yupResolver } from '@hookform/resolvers/yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Image, SafeAreaView, TextInput, View } from 'react-native';

import { Button, MailIcon, Text, TextField } from '@EH/components';
import { tw } from '@EH/configs';
import { Route, TextAlignment, TextVariant } from '@EH/constants';
import { AppStackParamList } from '@EH/routes';
import { useDispatch, useSelector } from '@EH/stores';

import { LoginFormValues } from './login.interface';
import { loginValidationSchema } from './login.validations';

export type LoginScreenProps = NativeStackScreenProps<
  AppStackParamList,
  Route.Login
>;

export function LoginScreen({ navigation }: LoginScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
  });

  const loading = useSelector(
    state => state.loading.effects.userStore.loginUserWithCredentials,
  );

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<LoginFormValues> = async userData => {
    try {
      await dispatch.userStore.loginUserWithCredentials(userData);
      navigation.navigate('Home');
    } catch (error) {
      //TODO:: handle the error
      console.log('error', error);
    }
  };

  const onFormInvalid: SubmitErrorHandler<LoginFormValues> = () =>
    console.log('errors', errors);

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
          <View style={tw`mb-2`}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value, onBlur } }) => (
                <TextField
                  value={value}
                  placeholder="abc@email.com"
                  onBlur={onBlur}
                  leftIcon={<MailIcon />}
                  onChangeText={value => onChange(value)}
                />
              )}
            />
          </View>
          <View style={tw`mb-2`}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value, onBlur } }) => (
                <TextField
                  value={value}
                  placeholder="abc@email.com"
                  onBlur={onBlur}
                  leftIcon={<MailIcon />}
                  onChangeText={value => onChange(value)}
                />
              )}
            />
          </View>
        </View>
        <Button
          title="Login"
          onPress={handleSubmit(onSubmit, onFormInvalid)}
          loading={loading}
        />
      </View>
    </SafeAreaView>
  );
}
