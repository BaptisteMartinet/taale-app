import type { Story } from 'store/screens/home/api';

import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { ActivityIndicator, Divider } from 'react-native-paper';

export interface DailyStoryProps {
  story: Story | null;
}

const DailyStory = (props: DailyStoryProps) => {
  const { story } = props;
  return (
    <FlatList
      style={styles.container}
      data={story?.sentences}
      renderItem={({ item }) => <Text style={styles.sentence}>{item.text}</Text>}
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
  sentence: {
    fontSize: 16,
    color: '#fafafa',
    fontWeight: 'bold',
    lineHeight: 32,
  },
});

export default DailyStory;
