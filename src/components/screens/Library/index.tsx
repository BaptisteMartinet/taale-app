import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { observer } from 'mobx-react';
import store from 'store/screens/library';
import StoryPreview from './StoryPreview';

// TODO message when list is empty and translation

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Library'>;

const Library = observer((props: NavigationProps) => {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.infoText}>Vous trouverez ici toutes les histoires auxquelles vous avez participé.</Text>
      <FlatList
        data={store.stories}
        renderItem={({ item }) => <StoryPreview story={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  infoText: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Library;
