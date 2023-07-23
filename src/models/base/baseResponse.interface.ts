export interface BaseResponse {
  statusCode: string;
  message: string;
}

export interface ApiResponse<T> extends BaseResponse {
  data: T;
}

export interface ApiErrorResponse<T = string> extends BaseResponse {
  error: T;
}
