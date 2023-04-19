import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation DeleteAccount {
  authenticated {
    account {
      deleteAccount
    }
  }
}
`;

export default function DeleteAccount() {
  return apolloClient.mutate({ mutation });
}
