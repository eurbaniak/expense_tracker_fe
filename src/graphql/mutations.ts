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

export const REGISTER_USER = gql`
  mutation RegisterUser($registerUserInput: RegisterUserInput) {
    registerUser(registerUserInput: $registerUserInput) {
      id
    }
  }
`;
