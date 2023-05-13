import {
  ApiErrorResponse,
  ApiResponse,
  LoginResponse,
  LoginUserData,
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

      return response;
    } catch (error) {
      console.log('error',error)
      throw new APIError<ApiErrorResponse>('CLIENT_ERROR', error.data);
    }
  }
}
