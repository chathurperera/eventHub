import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { tw } from '@EH/configs';

interface BaseAuthScreenProps {
  children: React.ReactNode;
}

export function BaseAuthScreen({ children }: BaseAuthScreenProps) {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={tw`grow`}
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
