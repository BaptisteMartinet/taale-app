import { gql } from '@apollo/client';
import { Role } from 'core/api/types/enums';
import apolloClient from 'core/apolloClient';

const mutation = gql`
mutation Login($email: String!, $password: String!) {
  public {
    account {
      login(email: $email, password: $password) {
        user {
          id
          username
          email
          role
          createdAt
          updatedAt
        }
        token
      }
    }
  }
}
`;

export interface User {
  id: number;
  username: string;
  email: string;
  role: Role;
  createdAt: number;
  updatedAt: number;
}

export type LoginResponse = {
  public: {
    account: {
      login: {
        user: User,
        token: string,
      },
    },
  }
}

export interface LoginVariables {
  email: string;
  password: string;
}

const exec = (variables: LoginVariables) => apolloClient.mutate<LoginResponse>({ mutation, variables });

export default exec;
