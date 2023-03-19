import { gql } from '@apollo/client'
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation Sentence($sentenceId: Int) {
  authenticated {
    sentence(id: $sentenceId) {
      markCompleted
    }
  }
}
`;

export interface MarkSentenceCompletedVariables {
  sentenceId: number;
}

export default function MarkSentenceCompleted(variables: MarkSentenceCompletedVariables) {
  return apolloClient.mutate<boolean>({ mutation, variables });
}
