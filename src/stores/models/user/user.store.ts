import { createModel } from '@rematch/core';

import { LoginUserData, SignupUserData } from '@EH/models';
import { AuthService } from '@EH/services';

import { RootModel } from '..';

export interface UserState {
  isAuthenticated: boolean;
  accessToken: string | null;
  user: {
    email: string;
    userName: string;
  };
}

const initialState: UserState = {
  isAuthenticated: false,
  accessToken: null,
  user: {
    email: '',
    userName: '',
  },
};

export const userStore = createModel<RootModel>()({
  state: { ...initialState } as UserState,

  reducers: {
    setIsAuthenticated(state: UserState, payload: boolean) {
      return { ...state, isAuthenticated: payload };
    },
    setAccessToken(state: UserState, accessToken: string | null) {
      return { ...state, accessToken };
    },

    setUser(state: UserState, payload: { userName: string; email: string }) {
      return { ...state, user: payload };
    },
  },

  effects: dispatch => ({
    async loginUserWithCredentials(payload: LoginUserData) {
      const data = await AuthService.loginUserWithCredentials(payload);
      dispatch.userStore.setAccessToken(data.accessToken);
      dispatch.userStore.setIsAuthenticated(true);
    },

    async registerUser(payload: SignupUserData) {
      await AuthService.signupUser(payload);
      //TODO:: save required data in future
    },

    async logout() {
      dispatch.userStore.setAccessToken(null);
      dispatch.userStore.setIsAuthenticated(false);
    },
  }),
});
