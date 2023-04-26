/* eslint-disable import/extensions */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { useDeviceContext } from 'twrnc';

import { tw } from '@EH/configs';

import App from './App';

export function Main(){
    useDeviceContext(tw);

  return (
    <Provider store={store}>
      <PaperProvider theme={paperTheme}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
}
