import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import { Provider as PaperProvider, MD3DarkTheme } from 'react-native-paper';
import 'lang';
import client from 'core/apolloClient';
import { Snackbar } from 'components/common/app';
import AppContainer from './AppContainer';
import Navigator from './Navigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={MD3DarkTheme}>
        <AppContainer>
          <Navigator />
          <Snackbar />
          <StatusBar style='auto' />
        </AppContainer>
      </PaperProvider>
    </ApolloProvider>
  );
};

registerRootComponent(App);
