import { LoadingStatus } from 'core/utils';
import accountStore from 'store/common/account';
import onboardingStore from 'store/screens/onboarding';
import homeStore from 'store/screens/home';

class AppStore extends LoadingStatus {
  constructor() {
    super();
    this.refresh().catch(console.warn);
  }

  public async refresh() {
    this.setLoading();
    await Promise.allSettled([
      onboardingStore.refresh(),
      accountStore.refreshAccount(),
      homeStore.refresh(),
    ]);
    this.setLoaded();
  }
}

export default new AppStore();
