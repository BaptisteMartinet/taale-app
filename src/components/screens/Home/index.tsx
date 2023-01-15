import type { RootStackParamList } from 'App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';
import StoriesList from './StoriesList';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home(props: NavigationProps) {
  return (
    <View style={styles.container}>
      <StoriesList title="Stories" stories={[
        { id: 0, title: 'Un alien qui voulais absolument rentrer sur sa planete natale. Il était beau et grand et voulait tout le temps mager des pates. lol Trop marrant.', createdAt: 0, updatedAt: 0 },
        { id: 1, title: 'Un alien qui voulais absolument rentrer sur sa planete natale.', createdAt: 0, updatedAt: 0 },
        { id: 2, title: 'Un alien qui voulais absolument rentrer sur sa planete natale.', createdAt: 0, updatedAt: 0 },
        { id: 3, title: 'Un alien qui voulais absolument rentrer sur sa planete natale.', createdAt: 0, updatedAt: 0 },
        { id: 4, title: 'Un alien qui voulais absolument rentrer sur sa planete natale.', createdAt: 0, updatedAt: 0 },
      ]} />
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
