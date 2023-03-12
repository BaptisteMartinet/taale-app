import { makeObservable, observable, action } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import accountStore from 'store/common/account';

// TODO refactor by creating an onboarding store

class AppStore {
  loading: boolean = true;
  onboardingCompleted: boolean | null = null;

  constructor() {
    makeObservable(this, {
      loading: observable,
      setLoaded: action,
      onboardingCompleted: observable,
      setOnboardingCompleted: action,
    });
    this.refresh().catch((e => console.error(e))); // TODO error snack
  }

  public setLoaded() {
    this.loading = false;
  }

  public setOnboardingCompleted(state: boolean) {
    this.onboardingCompleted = state;
  }

  private async refreshOnboardingState() {
    const onboardingState = await AsyncStorage.getItem('onboarding');
    this.setOnboardingCompleted(onboardingState === 'completed');
  }

  public async refresh() {
    await Promise.all([
      this.refreshOnboardingState(),
      accountStore.refreshAccount(),
    ]);
    this.setLoaded();
  }
}

export default new AppStore;
