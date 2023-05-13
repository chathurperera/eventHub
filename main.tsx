/* eslint-disable import/extensions */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { useDeviceContext } from 'twrnc';

import { tw } from '@EH/configs';
import './src/initialize-app';
import { store } from '@EH/stores';

import App from './App';

export default function Main() {
  useDeviceContext(tw);

  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}
