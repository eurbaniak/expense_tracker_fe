import { gql } from "@apollo/client";

export const IS_COOKIE_PRESENT = gql`
  query Query {
    isUserLoggedIn {
      email
    }
  }
`;
