import { makeObservable, observable, action } from 'mobx';
import Storage from 'core/storage';

class OnboardingStore {
  private static OnboardingStorageKey = 'onboaring';
  private static OnboardingStorageValue = 'completed';

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
    return Storage.setItem(OnboardingStore.OnboardingStorageKey, OnboardingStore.OnboardingStorageValue);
  }

  public async refresh() {
    const onboardingState = await Storage.getItem(OnboardingStore.OnboardingStorageKey);
    this.setOnboardingCompleted(onboardingState === OnboardingStore.OnboardingStorageValue);
  }
}

export default new OnboardingStore();
