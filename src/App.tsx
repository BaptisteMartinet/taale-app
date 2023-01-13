import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
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

const App = () => (
  <ApolloProvider client={client}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
      <Snackbar />
      <StatusBar style='auto' />
    </PaperProvider>
  </ApolloProvider>
);

registerRootComponent(App);
