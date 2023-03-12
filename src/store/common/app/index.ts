import { makeObservable, observable, action } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AppStore {
  onboardingCompleted: boolean | null = null;

  constructor() {
    makeObservable(this, {
      onboardingCompleted: observable,
      setOnboardingCompleted: action,
    });
    this.refreshOnboardingState().catch(e => console.error(e));
  }

  public setOnboardingCompleted(state: boolean) {
    this.onboardingCompleted = state;
  }

  private async refreshOnboardingState() {
    const onboardingState = await AsyncStorage.getItem('onboarding');
    this.setOnboardingCompleted(onboardingState === 'completed');
  }
}

export default new AppStore;
