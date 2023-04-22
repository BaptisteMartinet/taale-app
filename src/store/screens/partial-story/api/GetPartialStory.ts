import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query PartialStory {
  authenticated {
    partialStory {
      id
      text
      parentSentenceId
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
  username: string;
}

export interface Sentence {
  id: number;
  text: string;
  parentSentenceId: number | null;
  owner: UserRestricted | null;
  createdAt: number;
}

export interface PartialStoryResponse {
  authenticated: {
    partialStory: Sentence[];
  },
}

export default async function GetPartialStory() {
  const res = await apolloClient.query<PartialStoryResponse>({ query, fetchPolicy: 'no-cache' });
  return res.data.authenticated.partialStory;
}
