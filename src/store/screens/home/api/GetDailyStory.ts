import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query DailyStory {
  public {
    dailyStory {
      id
      createdAt
    }
  }
}
`;

export interface Story {
  id: number;
  createdAt: number;
}

export type DailyStoryResponse = {
  public: {
    dailyStory: Story,
  },
};

export default function GetDailyStory() {
  return apolloClient.query<DailyStoryResponse>({ query });
}
