export interface LoginUserData {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    email: string;
    firstName: string;
    lastName: string;
    token: string;
  };
}
