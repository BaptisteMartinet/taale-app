import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation ForgotPassword($email: String!) {
  public {
    account {
      forgotPassword(email: $email)
    }
  }
}
`;

export interface ForgotPasswordVariables {
  email: string;
}

export default function ForgotPassword(variables: ForgotPasswordVariables) {
  return apolloClient.mutate({ mutation, variables });
}
