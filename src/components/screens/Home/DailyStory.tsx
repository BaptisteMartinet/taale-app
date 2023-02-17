import type { Story } from 'store/screens/home/api';

import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export interface DailyStoryProps
{
  story: Story | null;
}

const DailyStory = (props: DailyStoryProps) => {
  const { story } = props;
  return (
    <FlatList
      data={story?.sentences}
      renderItem={({ item }) => <Text style={styles.sentence}>{item.text}</Text> }
      keyExtractor={(item) => item.id.toString() }
      ListEmptyComponent={ActivityIndicator}
    />
  );
};

const styles = StyleSheet.create({
  sentence: {
    fontSize: 16,
  },
});

export default DailyStory;
