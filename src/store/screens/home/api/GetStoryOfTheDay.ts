import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query StoryOfTheDay {
  public {
    storyOfTheDay {
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

export type StoryOfTheDayResponse = {
  public: {
    storyOfTheDay: Story,
  },
};

const exec = () => apolloClient.query<StoryOfTheDayResponse>({ query });

export default exec;
