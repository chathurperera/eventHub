import { yupResolver } from '@hookform/resolvers/yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Text, View } from 'react-native';

export function SignupScreen() {
  return (
    <View>
      <Text>SignupScreen</Text>
    </View>
  );
}
