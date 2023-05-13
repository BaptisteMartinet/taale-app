import { makeObservable, observable, action } from 'mobx';
import { isMobile } from 'core/utils';
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
    // Note: Onboarding screen does not work on web/desktop
    this.setOnboardingCompleted(onboardingState !== null || !isMobile);
  }
}

export default new OnboardingStore();
