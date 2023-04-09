import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation($email: String!) {
  public {
    account {
      resendEmailVerificationCode(email: $email)
    }
  }
}
`;

export interface ResendEmailVerificationCodeVariables {
  email: string;
}

export default function ResendEmailVerificationCode(variables: ResendEmailVerificationCodeVariables) {
  return apolloClient.mutate({ mutation, variables });
}
