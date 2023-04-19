import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query GetStory ($storyId: Int!) {
  public {
    story(storyId: $storyId) {
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

export type Owner = {
  id: number,
  username: string,
};

export type Sentence = {
  id: number,
  text: string,
  owner: Owner | null,
  createdAt: number/*timestamp*/,
};

export type Story = {
  id: number,
  sentences: Sentence[],
  createdAt: number/*timestamp*/,
}

export type GetStoryResponse = {
  public: {
    story: Story,
  },
};

export interface GetStoryVariables {
  storyId: number;
}

export default async function GetStory(variables: GetStoryVariables) {
  const res = await apolloClient.query<GetStoryResponse>({ query, variables });
  return res.data.public.story;
}
