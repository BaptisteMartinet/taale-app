import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import 'lang';
import client from './core/apolloClient';
import { Snackbar } from 'components/common';
import { Login, Home, Register } from 'components/screens';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const { t } = useTranslation('common', { keyPrefix: 'app' });
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#2b2b2b',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: '#fafafa',
              },
            }}
          >
            <Stack.Screen name="Home" component={Home} options={{ title: t('screens.home') }} />
            <Stack.Screen name="Login" component={Login} options={{ title: t('screens.login') }} />
            <Stack.Screen name="Register" component={Register} options={{ title: t('screens.register') }} />
          </Stack.Navigator>
        </NavigationContainer>
        <Snackbar />
        <StatusBar style='auto' />
      </PaperProvider>
    </ApolloProvider>
  );
};

registerRootComponent(App);
