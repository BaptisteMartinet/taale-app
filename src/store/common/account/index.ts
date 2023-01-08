import type { User, LoginVariables } from './api';

import assert from 'assert';
import * as SecureStore from 'expo-secure-store';
import { action, makeObservable, observable } from 'mobx';
import { loginMutation } from './api';

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
    await SecureStore.setItemAsync('token', token);
  }
}

export default new AccountStore();
