import { ApiResponse, ApisauceInstance, create } from 'apisauce';

import { APIError } from './APIError';

type HttpVerbs = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type GetAccessTokenCallback = () => string | null;

export class HttpService {
  private apiSauceWithoutAuth!: ApisauceInstance;

  private apiSauce!: ApisauceInstance;
  private apiSauceState: 'pending' | 'ready' = 'pending';

  private waitingList: Array<() => void> = [];

  private baseUrl: string;

  private getAccessToken: GetAccessTokenCallback;

  constructor(baseUrl: string, getAccessToken: GetAccessTokenCallback) {
    this.baseUrl = baseUrl;
    this.initializeApiSauce();
    this.getAccessToken = getAccessToken;
  }

  private initializeApiSauce = () => {
    this.apiSauce = create({ baseURL: undefined });
    this.apiSauceWithoutAuth = create({ baseURL: undefined });

    //TODO:: clarify the implementation
    // this.apiSauce.addRequestTransform(request => {
    //   // insert auth token
    //   if (this.getAccessToken()) {
    //     request.headers.Authorization = `Bearer ${this.getAccessToken()}`;
    //   } else {
    //     // TODO: Log the unexpected scenario (A tool to do logging is needed here)
    //   }

    //   return request;
    // });

    this.apiSauceState = 'ready';
  };

  private fetch = async <T, U = T>(
    method: HttpVerbs,
    path: string,
    params: unknown,
    data: unknown,
    anonymous: boolean,
    headers: any,
  ) => {
    const baseUrl = this.baseUrl;

    if (!baseUrl) {
      throw new APIError(
        'INTERNAL_ERROR',
        `DnsUrl is not available for ${baseUrl}`,
      );
    }

    let response: ApiResponse<T, U>;

    if (anonymous) {
      response = await this.apiSauceWithoutAuth.any<T, U>({
        method,
        baseURL: this.baseUrl,
        url: path,
        params,
        data,
        headers,
      });
    } else {
      // wait while apiSauce is not ready
      if (this.apiSauceState === 'pending') {
        await this.waitUntilReady();
      }

      if (!this.getAccessToken()) {
        throw new APIError('INTERNAL_ERROR', 'Access token is not defined');
      }

      // make the request
      response = await this.apiSauce.any<T, U>({
        method,
        baseURL: baseUrl,
        url: path,
        params,
        data,
        headers,
      });
    }

    // format the response as needed
    if (!response.ok) {
      throw new APIError(response.problem, response.data, response.status);
    }

    return response.data;
  };

  public postAnonymous = async <T, U = T>(path: string, data?: unknown, query?: {}) => {
    return this.fetch<T, U>('POST', path, query, data, true, undefined);
  };

  private waitUntilReady = () => {
    return new Promise<void>(resolve => {
      this.waitingList.push(() => resolve());
    });
  };

  public getApiSauceInstance = () => {
    return this.apiSauceWithoutAuth;
  };
}
