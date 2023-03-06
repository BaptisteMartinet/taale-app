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

const exec = (variables: MarkSentenceCompletedVariables) => apolloClient.mutate<boolean>({ mutation, variables });

export default exec;
