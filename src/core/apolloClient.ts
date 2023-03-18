import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as SecureStore from 'expo-secure-store';
import i18n from 'lang';
import { AppName, AppVersion, AuthTokenKey } from '_constants';

const httpLink = createHttpLink({
  uri: 'https://taale-api.herokuapp.com/',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync(AuthTokenKey);
  if (headers === undefined)
    headers = {};
  headers['content-language'] = i18n.language;
  if (token !== null)
    headers['authorization'] = `Bearer ${token}`;
  return { headers };
});

export default new ApolloClient({
  name: AppName,
  version: AppVersion,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      PublicQuery: {
        merge(existing, incoming, { mergeObjects }) {
          return mergeObjects(existing, incoming);
        },
      },
      AuthenticatedQuery: {
        merge(existing, incoming, { mergeObjects }) {
          return mergeObjects(existing, incoming);
        },
      },
      PublicMutation: {
        merge(existing, incoming, { mergeObjects }) {
          return mergeObjects(existing, incoming);
        },
      },
      AuthenticatedMutation: {
        merge(existing, incoming, { mergeObjects }) {
          return mergeObjects(existing, incoming);
        },
      },
    },
  }),
});
