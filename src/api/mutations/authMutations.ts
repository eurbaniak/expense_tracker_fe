import { gql, useMutation } from "@apollo/client";
import { ID, LoginInput, RegisterInput } from "../interfaces";

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

interface RegisterUserMutation {
  registerUser: {
    userId: ID;
  };
}

interface RegisterUserMutationVariables {
  registerUserInput: RegisterInput;
}

export const useRegisterMutation = () =>
  useMutation<RegisterUserMutation, RegisterUserMutationVariables>(
    REGISTER_USER
  );

interface LoginUserMutation {
  loginUser: {
    message: string;
    userId: string;
  };
}

interface LoginUserMutationVariables {
  loginUserInput: LoginInput;
}

export const useLoginMutation = () =>
  useMutation<LoginUserMutation, LoginUserMutationVariables>(LOGIN_USER);

export const useLogoutMutation = () => useMutation(LOGOUT_USER);
