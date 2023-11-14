import { gql, useQuery } from "@apollo/client";
import { ID } from "../interfaces";

const GET_USER_BY_ID = gql`
  query Query($userId: Int!) {
    user(id: $userId) {
      email
      username
    }
  }
`;

const GET_CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      email
      username
      userId
    }
  }
`;

interface GetUserByIdQuery {
  user: {
    email: string;
    username: string;
  };
}

interface GetUserByIdVariables {
  userId: ID;
}

export const useGetUserById = (userId: ID) =>
  useQuery<GetUserByIdQuery, GetUserByIdVariables>(GET_USER_BY_ID, {
    variables: { userId },
  });

interface GetCurrentUserQuery {
  currentUser: {
    email?: string;
    username?: string;
    userId?: ID;
  };
}

export const useGetCurrentUser = () =>
  useQuery<GetCurrentUserQuery>(GET_CURRENT_USER);
