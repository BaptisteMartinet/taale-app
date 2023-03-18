import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query PartialStory {
  authenticated {
    partialStory {
      id
      text
      owner {
        id
        username
      }
      createdAt
      updatedAt
    }
  }
}
`;

export interface UserRestricted {
  id: number;
  username: number;
}

export interface Sentence {
  id: number;
  text: string;
  owner: UserRestricted;
  createdAt: number;
}

export interface PartialStoryResponse {
  authenticated: {
    partialStory: Sentence[];
  },
}

export default function exec() {
  return apolloClient.query<PartialStoryResponse>({ query, fetchPolicy: 'no-cache' });
}
