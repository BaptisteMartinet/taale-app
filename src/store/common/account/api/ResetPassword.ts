import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation ResetPassword(
  $email: String!
  $newPassword: String!
  $validationCode: String!
) {
  public {
    account {
      resetPassword(
        email: $email
        newPassword: $newPassword
        validationCode: $validationCode
      )
    }
  }
}
`;

export interface ResetPasswordVariables {
  email: string;
  newPassword: string;
  validationCode: string;
}

export default function ResetPassword(variables: ResetPasswordVariables) {
  return apolloClient.mutate({ mutation, variables });
}
