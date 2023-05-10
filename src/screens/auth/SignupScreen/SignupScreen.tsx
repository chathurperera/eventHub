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
  EventHubLogo,
  Link,
  MailIcon,
  PasswordIcon,
  Text,
  TextField,
} from '@EH/components';
import { tw } from '@EH/configs';
import { Color, Route, TextAlignment, TextVariant } from '@EH/constants';
import { AppStackParamList } from '@EH/routes';
import { useDispatch, useSelector } from '@EH/stores';

import { SignupFormValues } from './signup.interface';
import { signupValidationSchema } from './signup.validations';

export type LoginScreenProps = NativeStackScreenProps<
  AppStackParamList,
  Route.Login
>;

export function LoginScreen({ navigation }: LoginScreenProps) {
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
      <View style={tw`px-8 py-4`}>
        <View style={tw`mx-auto`}>
          <EventHubLogo />
        </View>
        <View style={tw`my-4`}>
          <View style={tw`mb-2`}>
            <Text variant={TextVariant.Heading4} textAlign={TextAlignment.Left}>
              Sign in
            </Text>
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
          <View style={tw`mb-2`}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value, onBlur } }) => (
                <TextField
                  value={value}
                  placeholder="Your password"
                  onBlur={onBlur}
                  leftIcon={<PasswordIcon />}
                  onChangeText={value => onChange(value)}
                />
              )}
            />
          </View>
          <View style={tw`flex-row items-center justify-between mt-3`}>
            <Switch
              value={rememberMe}
              onValueChange={onRememberMeToggle}
              circleSize={20}
              renderActiveText={false}
              renderInActiveText={false}
              backgroundActive={Color.PrimaryBlue.EH100}
              backgroundInactive={'gray'}
            />
            <Link text="Forgot Password?" underline={false} />
          </View>
        </View>
        <View style={tw`mt-2`}>
          <Button
            title="Sign in"
            onPress={handleSubmit(onSubmit, onFormInvalid)}
            loading={false}
          />
        </View>
        <View style={tw`my-4`}>
          <Text variant={TextVariant.Title2} color={Color.Neutral.EH400}>
            OR
          </Text>
        </View>
        <View style={tw`mt-6`}>
          <Text variant={TextVariant.Body1Regular}>
            Don't have an account ?{' '}
            <Text variant={TextVariant.Link} color={Color.PrimaryBlue.EH100}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}