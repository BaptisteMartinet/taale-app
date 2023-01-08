import type { User, LoginVariables } from './api';

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
    const { user, token } = data.public.account.login;
    this.setUser(user);
    // TODO handle token
  }
}

export default new AccountStore();
