import { makeObservable, observable, action } from 'mobx';
import { handleWithSnack } from 'core/utils/promise';
import accountStore from 'store/common/account';
import onboardingStore from 'store/screens/onboarding';

class AppStore {
  loading: boolean = true;

  constructor() {
    makeObservable(this, {
      loading: observable,
      setLoaded: action,
    });
    const promise = this.refresh();
    handleWithSnack(promise, { successMessage: null, errorMessage: true });
  }

  public setLoaded() {
    this.loading = false;
  }

  public async refresh() {
    await Promise.all([
      onboardingStore.refresh(),
      accountStore.refreshAccount(),
    ]).catch((e) => { /* empty */ });
    this.setLoaded();
  }
}

export default new AppStore;
