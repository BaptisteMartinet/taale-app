import React from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  homeHandler,
  partialStoryHandler,
  libraryHandler,
} from 'store/handlers';
import AppStore from 'store/common/app';
import OnboardingStore from 'store/screens/onboarding';
import {
  Loading,
  Login,
  Home,
  Register,
  ForgotPassword,
  Onboarding,
  PartialStory,
  ParticipationSuccess,
  StoryViewer,
  Library,
} from 'components/screens';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Onboarding: undefined;
  PartialStory: undefined;
  ParticipationSuccess: undefined;
  StoryViewer: { storyId: number },
  Library: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = observer(() => {
  const { t } = useTranslation('common', { keyPrefix: 'app' });
  if (AppStore.loading)
    return <Loading />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={OnboardingStore.onboardingCompleted ? 'Home' : 'Onboarding'}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2b2b2b',
          },
          headerBackTitle: t('backTitle'),
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#fafafa',
          },
          contentStyle: {
            backgroundColor: '#2b2b2b',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} listeners={{ focus: homeHandler }} />
        <Stack.Screen name="Login" component={Login} options={{ title: t('screens.login') }} />
        <Stack.Screen name="Register" component={Register} options={{ title: t('screens.register') }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: t('screens.forgotPassword') }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="PartialStory" component={PartialStory} options={{ title: t('screens.partialStory') }} listeners={{ focus: partialStoryHandler }} />
        <Stack.Screen name="ParticipationSuccess" component={ParticipationSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="StoryViewer" component={StoryViewer} options={{ title: t('screens.storyViewer') }} />
        <Stack.Screen name="Library" component={Library} options={{ title: t('screens.library') }} listeners={{ focus: libraryHandler }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Navigator;
