import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query DailyStory {
  public {
    dailyStory {
      id
      sentences {
        id
        text
        owner {
          id
          username
        }
        createdAt
      }
      createdAt
    }
  }
}
`;

export interface Owner {
  id: number;
  username: number;
}

export interface Sentence {
  id: number;
  text: string;
  owner: Owner;
  createdAt: number;
}

export interface Story {
  id: number;
  sentences: Sentence[];
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
