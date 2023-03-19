import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation($sentenceId: Int) {
  authenticated {
    sentence(id: $sentenceId) {
      report
    }
  }
}
`;

export interface ReportSentenceVariables {
  sentenceId: number;
}

export default function ReportSentence(variables: ReportSentenceVariables) {
  return apolloClient.mutate<boolean>({ mutation, variables });
}
