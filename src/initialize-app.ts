import { HttpService, HttpServiceInstance } from '@EH/services';
import { store } from '@EH/stores';

const getAccessToken = () => {
  return store.getState().userStore.accessToken;
};

const BASE_URL = 'https://dummyjson.com/';
const httpService = new HttpService(BASE_URL, getAccessToken);

HttpServiceInstance.setHttpServiceInstance(httpService);
