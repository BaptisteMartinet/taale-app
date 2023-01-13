import type { User, LoginVariables, RegisterVariables } from './api';

import assert from 'assert';
import * as SecureStore from 'expo-secure-store';
import { action, makeObservable, observable } from 'mobx';
import { loginMutation, RegisterMutation } from './api';

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

  register(variables: RegisterVariables) {
    return RegisterMutation(variables);
  }
}

export default new AccountStore();
