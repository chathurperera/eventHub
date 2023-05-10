import { yupResolver } from '@hookform/resolvers/yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Switch } from 'react-native-switch';

import {
  Button,
  Link,
  MailIcon,
  PasswordIcon,
  ProfileIcon,
  Text,
  TextField,
} from '@EH/components';
import { tw } from '@EH/configs';
import { Color, Route, TextAlignment, TextVariant } from '@EH/constants';
import { AppStackParamList } from '@EH/routes';
import { useDispatch, useSelector } from '@EH/stores';

import { SignupFormValues } from './signup.interface';
import { signupValidationSchema } from './signup.validations';

export type SignupScreenProps = NativeStackScreenProps<
  AppStackParamList,
  Route.Signup
>;

export function SignupScreen({ navigation }: SignupScreenProps) {
  const [rememberMe, setRememberMe] = useState(false);

  const onRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormValues>({
    mode: 'onChange',
    resolver: yupResolver(signupValidationSchema),
  });

  const loading = useSelector(
    state => state.loading.effects.userStore.loginUserWithCredentials,
  );

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<SignupFormValues> = async userData => {
    try {
      await dispatch.userStore.loginUserWithCredentials(userData);
      navigation.navigate(Route.Home);
    } catch (error) {
      //TODO:: handle the error
      console.log('error', error);
    }
  };

  const onFormInvalid: SubmitErrorHandler<SignupFormValues> = () =>
    console.log('errors', errors);

  return (
    <SafeAreaView>
      <View style={tw`px-8 py-4 h-full justify-between`}>
        <View style={tw`my-4`}>
          <View style={tw`mb-2`}>
            <Text variant={TextVariant.Heading4} textAlign={TextAlignment.Left}>
              Sign up
            </Text>
          </View>
          <View style={tw`mb-2`}>
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, value, onBlur, ref } }) => (
                <TextField
                  ref={ref}
                  value={value}
                  placeholder="Your first name"
                  onBlur={onBlur}
                  leftIcon={<ProfileIcon />}
                  onChangeText={value => onChange(value)}
                />
              )}
            />
          </View>
          <View style={tw`mb-2`}>
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, value, onBlur, ref } }) => (
                <TextField
                  ref={ref}
                  value={value}
                  placeholder="Your last name"
                  onBlur={onBlur}
                  leftIcon={<ProfileIcon />}
                  onChangeText={value => onChange(value)}
                />
              )}
            />
          </View>
          <View style={tw`mb-2`}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value, onBlur, ref } }) => (
                <TextField
                  value={value}
                  ref={ref}
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
              name="password"
              render={({ field: { onChange, value, onBlur, ref } }) => (
                <TextField
                  ref={ref}
                  value={value}
                  placeholder="Your password"
                  secureTextEntry
                  onBlur={onBlur}
                  leftIcon={<PasswordIcon />}
                  onChangeText={value => onChange(value)}
                />
              )}
            />
          </View>
          <View style={tw`mb-2`}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value, onBlur, ref } }) => (
                <TextField
                  ref={ref}
                  value={value}
                  secureTextEntry
                  placeholder="Confirm password"
                  onBlur={onBlur}
                  leftIcon={<PasswordIcon />}
                  onChangeText={value => onChange(value)}
                />
              )}
            />
          </View>
        </View>
        <View>
          <View style={tw`mt-2`}>
            <Button
              title="Sign up"
              onPress={handleSubmit(onSubmit, onFormInvalid)}
              loading={false}
            />
          </View>
          <View style={tw`mt-6`}>
            <Text variant={TextVariant.Body1Regular}>
              Already have an account ?{' '}
              <Link
                text="Login"
                onPress={() => navigation.navigate(Route.Login)}
                underline={false}
              />
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
