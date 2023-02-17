import type { RootStackParamList } from 'App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home(props: NavigationProps) {
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
}

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
