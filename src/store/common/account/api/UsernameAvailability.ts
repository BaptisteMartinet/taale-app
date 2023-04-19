import { gql } from '@apollo/client';
import apolloClient from 'core/apolloClient';

const query = gql`
query UsernameAvailability($username: String!) {
  public {
    account {
      usernameAvailability(username: $username)
    }
  }
}
`;

export type UsernameAvailabilityResponse = {
  public: {
    account: {
      usernameAvailability: boolean,
    },
  },
};

export interface UsernameAvailabilityVariables {
  username: string;
}

export default async function UsernameAvailability(variables: UsernameAvailabilityVariables) {
  const res = await apolloClient.query<UsernameAvailabilityResponse>({ query, variables });
  return res.data.public.account.usernameAvailability;
}
