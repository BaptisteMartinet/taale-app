import type { Sentence as SentenceT } from './Sentence';

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator, Divider } from 'react-native-paper';
import Sentence from './Sentence';

export interface SentencesListProps {
  sentences: SentenceT[];
}

const SentencesList = (props: SentencesListProps) => {
  const { sentences } = props;
  return (
    <FlatList
      style={styles.container}
      data={sentences}
      renderItem={({ item }) => <Sentence sentence={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={ActivityIndicator}
      ItemSeparatorComponent={() => <Divider style={{ width: '5%' }} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default SentencesList;
