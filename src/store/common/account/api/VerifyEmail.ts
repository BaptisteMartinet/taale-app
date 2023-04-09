import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation VerifyEmail($email: String!) {
  public {
    account {
      verifyEmail(email: $email)
    }
  }
}
`;

export interface VerifyEmailVariables {
  email: string;
}

export default function VerifyEmail(variables: VerifyEmailVariables) {
  return apolloClient.mutate({ mutation, variables });
}
