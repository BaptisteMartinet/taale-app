import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import { Provider as PaperProvider } from 'react-native-paper';
import 'lang';
import client from 'core/apolloClient';
import { Snackbar } from 'components/common/app';
import Navigator from './Navigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <Navigator/>
        <Snackbar />
        <StatusBar style='auto' />
      </PaperProvider>
    </ApolloProvider>
  );
};

registerRootComponent(App);
