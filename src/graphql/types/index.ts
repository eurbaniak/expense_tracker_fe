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
