export interface LoginUserData {
  email: string;
  password: string;
}


export interface LoginResponse {
  data: {
    email: string;
    userName: string;
  };
  accessToken:string
}
