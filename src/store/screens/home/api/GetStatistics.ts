import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query GetStatistics {
  public {
    statistics {
      users
      openTrees
      stories
      sentences
    }
  }
}
`;

export interface StatisticsQuery {
  users: number;
  openTrees: number;
  stories: number;
  sentences: number;
}

export type GetStatisticsResponse = {
  public: {
    statistics: StatisticsQuery,
  },
};

export default async function GetStatistics() {
  const res = await apolloClient.query<GetStatisticsResponse>({ query, fetchPolicy: 'no-cache' });
  return res.data.public.statistics;
}
