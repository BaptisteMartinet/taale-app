import type { User, LoginVariables, RegisterVariables } from './api';

import assert from 'assert';
import * as SecureStore from 'expo-secure-store';
import { action, makeObservable, observable } from 'mobx';
import { AuthTokenKey } from '_constants';
import { loginMutation, RegisterMutation, GetAccount } from './api';

class AccountStore {
  user: User | null = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action,
    });
  }

  setUser(user: User) {
    this.user = user;
  }

  async login(variables: LoginVariables) {
    const { data } = await loginMutation(variables);
    assert(data);
    const { user, token } = data.public.account.login;
    this.setUser(user);
    await SecureStore.setItemAsync(AuthTokenKey, token);
  }

  register(variables: RegisterVariables) {
    return RegisterMutation(variables);
  }

  public async refreshAccount() {
    const authToken = await SecureStore.getItemAsync(AuthTokenKey);
    if (authToken === null)
      return;
    const res = await GetAccount();
    this.setUser(res.data.authenticated.account);
  }
}

export default new AccountStore();
