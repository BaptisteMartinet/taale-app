import React from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homeHandler, partialStoryHandler } from 'store/handlers';
import {
  Loading,
  Login,
  Home,
  Register,
  Onboarding,
  PartialStory,
} from 'components/screens';
import AppStore from 'store/common/app';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Onboarding: undefined;
  PartialStory: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = observer(() => {
  const { t } = useTranslation('common', { keyPrefix: 'app' });
  if (AppStore.onboardingCompleted === null)
    return <Loading />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppStore.onboardingCompleted ? 'Home' : 'Onboarding'}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2b2b2b',
          },
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
        <Stack.Screen name="Home" component={Home} options={{ title: t('screens.home') }} listeners={{ focus: homeHandler }} />
        <Stack.Screen name="Login" component={Login} options={{ title: t('screens.login') }} />
        <Stack.Screen name="Register" component={Register} options={{ title: t('screens.register') }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ title: t('screens.onboarding'), headerShown: false }} />
        <Stack.Screen name="PartialStory" component={PartialStory} options={{ title: 'test' }} listeners={{ focus: partialStoryHandler }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Navigator;
