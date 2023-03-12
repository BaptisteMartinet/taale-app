import type { Role } from 'core/api/types/enums';

import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query Account {
  authenticated {
    account {
      id
      username
      email
      role
      createdAt
      updatedAt
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

export type GetAccountResponse = {
  authenticated: {
    account: User,
  },
}

export default function exec() {
  return apolloClient.query<GetAccountResponse>({ query });
}
