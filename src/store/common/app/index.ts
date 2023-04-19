import { handleWithSnack, LoadingStatus } from 'core/utils';
import accountStore from 'store/common/account';
import onboardingStore from 'store/screens/onboarding';
import homeStore from 'store/screens/home';

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
      homeStore.refresh(),
    ]);
    this.setLoaded();
  }
}

export default new AppStore();
