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

export default function UsernameAvailability(variables: UsernameAvailabilityVariables) {
  return apolloClient.query<UsernameAvailabilityResponse>({ query, variables });
}
