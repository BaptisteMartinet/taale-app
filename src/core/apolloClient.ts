import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as SecureStore from 'expo-secure-store';

const httpLink = createHttpLink({
  uri: 'https://taale-api.herokuapp.com/', // TODO move to env?
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync('token');
  if (token === null)
    return { headers };
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
