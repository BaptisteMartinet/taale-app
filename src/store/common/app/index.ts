import { handleWithSnack, LoadingStatus } from 'core/utils/promise';
import accountStore from 'store/common/account';
import onboardingStore from 'store/screens/onboarding';

class AppStore extends LoadingStatus {
  constructor() {
    super();
    const promise = this.refresh();
    handleWithSnack(promise, { successMessage: null, errorMessage: true });
  }

  public async refresh() {
    this.setLoading();
    await Promise.all([
      onboardingStore.refresh(),
      accountStore.refreshAccount(),
    ]).catch((e) => { /* empty */ });
    this.setLoaded();
  }
}

export default new AppStore();
