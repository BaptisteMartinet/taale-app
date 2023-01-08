import { registerRootComponent } from 'expo';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider as PaperProvider } from 'react-native-paper';
import { Login } from 'components/screens';

const client = new ApolloClient({
  uri: 'https://taale-api.herokuapp.com/', // TODO move to env
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <PaperProvider>
      <Login />
    </PaperProvider>
  </ApolloProvider>
);

registerRootComponent(App);
