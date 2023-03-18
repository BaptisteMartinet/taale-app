import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation CreateSentence($parentSentenceId: Int!, $text: String!) {
  authenticated {
    sentence {
      create(parentSentenceId: $parentSentenceId, text: $text) {
        id
      }
    }
  }
}
`;

export interface CreateSentenceVariables {
  parentSentenceId: number;
  text: string;
}

export default function CreateSentence(variables: CreateSentenceVariables) {
  return apolloClient.mutate({ mutation, variables });
}
