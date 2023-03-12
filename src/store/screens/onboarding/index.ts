import { makeObservable, observable, action } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    return AsyncStorage.setItem(OnboardingStore.OnboardingStorageKey, OnboardingStore.OnboardingStorageValue);
  }

  public async refresh() {
    const onboardingState = await AsyncStorage.getItem(OnboardingStore.OnboardingStorageKey);
    this.setOnboardingCompleted(onboardingState === OnboardingStore.OnboardingStorageValue);
  }
}

export default new OnboardingStore();
