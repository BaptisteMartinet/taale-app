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
      updatedAt
    }
  }
}
`;

export interface Sentence
{
  id: number;
  text: string;
  createdAt: number;
}

export interface Story
{
  id: number;
  sentences: Sentence[];
  createdAt: number;
}

export type DailyStoryResponse = {
  public: {
    storyOfTheDay: Story,
  },
};

const exec = () => apolloClient.query<DailyStoryResponse>({ query });

export default exec;
