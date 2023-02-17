import type { RootStackParamList } from 'App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import { FAB } from 'react-native-paper';
import { handleWithSnack } from 'core/utils/promises';
import store from 'store/screens/home';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = observer((props: NavigationProps) => {
  useEffect(() => {
    const promise = store.init();
    handleWithSnack(promise, { successMessage: null, errorMessage: true });
  }, []);

  if (store.storyOfTheDay === null)
    return null; // TODO handle loading issues
  return (
    <View style={styles.container}>
      <FAB
        icon="pencil-plus"
        style={styles.fab}
        onPress={() => {
          console.warn('Not handled'); //TODO FAB redirection
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  fab: {
    position: 'absolute',
    right: 40,
    bottom: 50,
  },
});

export default Home;