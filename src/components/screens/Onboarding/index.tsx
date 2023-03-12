import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import OnboardingCarousel from './OnboardingCarousel';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const Onboarding = (props: NavigationProps) => {
  return <OnboardingCarousel/>;
};

export default Onboarding;
