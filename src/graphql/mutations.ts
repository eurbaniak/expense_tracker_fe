import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($loginUserInput: LoginUserInput) {
    loginUser(loginUserInput: $loginUserInput) {
      message
      userId
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation Mutation {
    logoutUser {
      message
    }
  }
`;

export interface LoginUserMutation {
  loginUser: {
    message: string;
    userId: string;
  };
}

export interface LoginUserMutationVariables {
  loginUserInput: {
    email: string;
    password: string;
  };
}
