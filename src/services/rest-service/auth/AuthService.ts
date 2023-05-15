import {
  ApiErrorResponse,
  ApiResponse,
  LoginResponse,
  LoginUserData,
  SignupResponse,
  SignupUserData
} from '@EH/models';

import { APIError, HttpServiceInstance } from './../../http-service';

export class AuthService {
  static async loginUserWithCredentials(data: LoginUserData) {
    const httpServiceInstance = HttpServiceInstance.getHttpServiceInstance();

    try {
      const response = await httpServiceInstance.postAnonymous<
        ApiResponse<LoginResponse>,
      ApiErrorResponse
      >('login', data);

      if (!response?.data) {
        throw new APIError('UNKNOWN_ERROR');
      }

      return response.data;
    } catch (error) {
      console.log('error',error)
      throw new APIError<ApiErrorResponse>('CLIENT_ERROR', error);
    }
  }

  static async signupUser(data: SignupUserData) {
    const httpServiceInstance = HttpServiceInstance.getHttpServiceInstance();

    try {
      const response = await httpServiceInstance.postAnonymous<
        ApiResponse<SignupResponse>,
      ApiErrorResponse
      >('login', data);

      return response;
    } catch (error) {
      console.log('error',error)
      throw new APIError<ApiErrorResponse>('CLIENT_ERROR', error);
    }
  }
}
