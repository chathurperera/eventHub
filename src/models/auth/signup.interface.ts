export interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

export interface SignupUserData {
  email: string;
  password: string;
}

export interface SignupResponse {
  user: User;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  profilePicture: string;
  isActive: boolean;
}
