import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getLocales } from 'expo-localization';
import { AppName, AppVersion, AuthTokenKey } from 'core/constants';
import Storage from 'core/storage';

const httpLink = createHttpLink({
  uri: 'https://taale-api.herokuapp.com/',
});

const authLink = setContext(async (_, { headers }) => {
  if (headers === undefined)
    headers = {};
  const token = await Storage.getItem(AuthTokenKey, { secure: true });
  const languageCode = getLocales()[0]?.languageCode;
  if (token !== null)
    headers.authorization = `Bearer ${token}`;
  if (languageCode)
    headers['content-language'] = languageCode;
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
