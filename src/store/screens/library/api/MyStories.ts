import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query MyStories {
  authenticated {
    myStories {
      id
      title
      createdAt
    }
  }
}
`;

export interface Story {
  id: number;
  title: string;
  createdAt: number/*timestamp*/;
}

export type MyStoriesResponse = {
  authenticated: {
    myStories: Story[],
  },
};

export default function MyStories() {
  return apolloClient.query<MyStoriesResponse>({ query });
}
