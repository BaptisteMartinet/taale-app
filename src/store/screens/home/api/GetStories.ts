import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query GetStories {
  public {
    stories {
      id
      title
      createdAt
      updatedAt
    }
  }
}
`;

export interface Story {
  id: number;
  title: string;
  createdAt: number;
  updatedAt: number;
}

export type GetStoriesResponse = {
  public: {
    stories: Array<Story>,
  },
}

const exec = () => apolloClient.query<GetStoriesResponse>({ query });

export default exec;
