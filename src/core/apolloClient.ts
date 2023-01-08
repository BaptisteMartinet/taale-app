import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: 'https://taale-api.herokuapp.com/', // TODO move to env
  cache: new InMemoryCache(),
});
