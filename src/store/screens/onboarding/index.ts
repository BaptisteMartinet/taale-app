import { makeObservable, observable, action } from 'mobx';
import Storage from 'core/storage';

class OnboardingStore {
  private static OnboardingStorageKey = 'onboaring';

  public onboardingCompleted: boolean | null = null;

  constructor() {
    makeObservable(this, {
      onboardingCompleted: observable,
      setOnboardingCompleted: action,
    });
  }

  public setOnboardingCompleted(state: boolean) {
    this.onboardingCompleted = state;
  }

  public saveOnboardingCompleted() {
    return Storage.setItem(OnboardingStore.OnboardingStorageKey, 'completed');
  }

  public async refresh() {
    const onboardingState = await Storage.getItem(OnboardingStore.OnboardingStorageKey);
    this.setOnboardingCompleted(onboardingState !== null);
  }
}

export default new OnboardingStore();
