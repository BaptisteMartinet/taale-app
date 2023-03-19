import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation Register($username: String!, $email: String!, $password: String!) {
  public {
    account {
      register(username: $username, email: $email, password: $password)
    }
  }
}
`;

export interface RegisterVariables {
  username: string;
  email: string;
  password: string;
}

export default function Register(variables: RegisterVariables) {
  return apolloClient.mutate({ mutation, variables });
}
