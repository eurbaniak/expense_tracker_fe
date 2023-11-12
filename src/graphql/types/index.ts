export type ID = string | number;

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

export interface IsUserLoggedInQuery {
  isUserLoggedIn: {
    email: string | null;
  };
}

export interface RegisterUserMutation {
  registerUser: {
    id: ID;
  };
}
export interface RegisterUserMutationVariables {
  registerUserInput: {
    email: string;
    password: string;
    username: string;
  };
}
