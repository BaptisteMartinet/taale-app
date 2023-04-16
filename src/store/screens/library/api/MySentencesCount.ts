import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query Statistics {
  authenticated {
    statistics {
      mySentences
    }
  }
}
`;

export type MySentencesCountResponse = {
  authenticated: {
    statistics: {
      mySentences: number,
    },
  },
}

export default async function MySentencesCount() {
  const res = await apolloClient.query<MySentencesCountResponse>({ query });
  return res.data.authenticated.statistics.mySentences;
}
