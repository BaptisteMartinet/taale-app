import type { User, LoginVariables } from './api';

import assert from 'assert';
import { action, computed, makeObservable, observable } from 'mobx';
import { AuthTokenKey } from 'core/constants';
import Storage from 'core/storage';
import {
  loginMutation,
  UsernameAvailability,
  VerifyEmail,
  ResendEmailVerificationCode,
  RegisterMutation,
  GetAccount,
  DeleteAccount,
  ForgotPassword,
  ResetPassword,
} from './api';

class AccountStore {
  user: User | null = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action,
      loggedIn: computed,
      loggedOut: computed,
    });
  }

  setUser(user: User | null) {
    this.user = user;
  }

  public get loggedIn() {
    return this.user !== null;
  }

  public get loggedOut() {
    return this.user === null;
  }

  public async login(variables: LoginVariables) {
    const { data } = await loginMutation(variables);
    assert(data);
    const { user, token } = data.public.account.login;
    this.setUser(user);
    await Storage.setItem(AuthTokenKey, token, { secure: true });
  }

  public async logout() {
    await Storage.deleteItem(AuthTokenKey, { secure: true });
    this.setUser(null);
  }

  public register = RegisterMutation;

  // Note: use this for username validation on register screen
  public usernameAvailability = UsernameAvailability;

  public verifyEmail = VerifyEmail;

  public resendEmailVerificationCode = ResendEmailVerificationCode;

  public async refreshAccount() {
    const authToken = await Storage.getItem(AuthTokenKey, { secure: true });
    if (authToken === null)
      return;
    const account = await GetAccount();
    this.setUser(account);
  }

  public async deleteAccount() {
    await DeleteAccount();
    await this.logout();
  }

  public forgotPassword = ForgotPassword;

  public resetPassword = ResetPassword;
}

export default new AccountStore();
