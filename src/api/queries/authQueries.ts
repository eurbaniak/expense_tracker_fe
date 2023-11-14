import { gql, useQuery } from "@apollo/client";
import { ID } from "../interfaces";

export const IS_COOKIE_PRESENT = gql`
  query Query {
    isUserLoggedIn {
      email
      userId
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query Query($userId: Int!) {
    user(id: $userId) {
      email
      username
    }
  }
`;

interface IsUserLoggedInQuery {
  isUserLoggedIn: {
    email: string | null;
    userId: ID;
  };
}

export const useIsCookiePresent = () =>
  useQuery<IsUserLoggedInQuery>(IS_COOKIE_PRESENT);
