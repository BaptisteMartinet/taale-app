import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { Login } from 'components/screens';

function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}

registerRootComponent(App);
