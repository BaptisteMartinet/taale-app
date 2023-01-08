import { registerRootComponent } from 'expo';
import { ApolloProvider } from '@apollo/client';
import { Provider as PaperProvider } from 'react-native-paper';
import client from './core/apolloClient';
import { Login } from 'components/screens';

const App = () => (
  <ApolloProvider client={client}>
    <PaperProvider>
      <Login />
    </PaperProvider>
  </ApolloProvider>
);

registerRootComponent(App);
