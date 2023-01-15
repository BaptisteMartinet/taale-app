import type { RootStackParamList } from 'App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home(props: NavigationProps) {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
