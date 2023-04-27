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
      >('auth/login', data);

      if (!response?.data) {
        throw new APIError('UNKNOWN_ERROR');
      }

      return response.data;
    } catch (error) {
      throw new APIError<ApiErrorResponse>('CLIENT_ERROR', error.data);
    }
  }
}
