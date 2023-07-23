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

import { BaseAuthScreen } from '../components/BaseAuthScreen';
import { SocialLogin } from './components/SocialLogin';
import { LoginFormValues } from './login.interface';
import { loginValidationSchema } from './login.validations';

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
    setFocus,
    handleSubmit,
    formState: { isValid, isSubmitted, errors, dirtyFields },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
  });

  const loading = useSelector(
    state => state.loading.effects.userStore.loginUserWithCredentials,
  );

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<LoginFormValues> = async userData => {
    console.log('userData', userData);
    console.log('isValid', isValid);
    console.log('dirtyFields', dirtyFields);
    try {
      await dispatch.userStore.loginUserWithCredentials(userData);
      navigation.navigate(Route.Home);
    } catch (error) {
      //TODO:: handle the error
      console.log('error on onSubmit function', error);
    }
  };

  const onFormInvalid: SubmitErrorHandler<LoginFormValues> = () => {
    console.log('errors on formInvalid errors', errors);
  };

  return (
    <BaseAuthScreen>
      <View style={tw`px-8 py-4 h-full justify-between`}>
        <View>
          <View style={tw`mx-auto`}>
            <EventHubLogo />
          </View>
          <View style={tw`my-4`}>
            <View style={tw`mb-2`}>
              <Text
                variant={TextVariant.Heading4}
                textAlign={TextAlignment.Left}>
                Sign in
              </Text>
            </View>
            <View style={tw`mb-2`}>
              <Controller
                control={control}
                name="email"
                render={({
                  field: { value, onChange, onBlur, ref },
                  fieldState: { error, isTouched },
                }) => (
                  <TextField
                    ref={ref}
                    leftIcon={<MailIcon />}
                    maxLength={256}
                    value={value}
                    onChangeText={onChange}
                    placeholder="your email"
                    onBlur={onBlur}
                    helperText={(isTouched || isSubmitted) && error?.message}
                    helperTextColor={Color.Accent.EH200}
                    error={(isTouched || isSubmitted) && error !== undefined}
                    returnKeyType={'next'}
                    onSubmitEditing={() => setFocus('password')}
                    autoCapitalize={'none'}
                  />
                )}
              />
            </View>
            <View style={tw`mb-2`}>
              <Controller
                control={control}
                name="password"
                render={({
                  field: { onChange, value, onBlur, ref },
                  fieldState: { error, isTouched },
                }) => (
                  <TextField
                    ref={ref}
                    value={value}
                    placeholder="Your password"
                    onBlur={onBlur}
                    error={(isTouched || isSubmitted) && error !== undefined}
                    leftIcon={<PasswordIcon />}
                    onChangeText={onChange}
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
              loading={loading}
            />
          </View>
          <View style={tw`my-4`}>
            <Text variant={TextVariant.Title2} color={Color.Neutral.EH400}>
              OR
            </Text>
          </View>
          <SocialLogin />
        </View>
        <View style={tw`mt-6`}>
          <Text variant={TextVariant.Body1Regular}>
            Don't have an account ?{` `}
            <Link
              text="Sign up"
              onPress={() => navigation.navigate(Route.Signup)}
              underline={false}
            />
          </Text>
        </View>
      </View>
    </BaseAuthScreen>
  );
}
