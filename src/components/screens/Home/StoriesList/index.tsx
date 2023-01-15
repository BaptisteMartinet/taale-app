import type { PropsWithChildren } from 'react';
import type { Story } from 'store/screens/home/api';

import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import StoryCard from './StoryCard';

const ItemWapper = (props: PropsWithChildren) => (
  <View style={styles.itemWrapper}>
    {props.children}
  </View>
);

export interface StoriesListProps {
  title: string;
  stories: Story[];
}

const StoriesList = (props: StoriesListProps) => {
  const { title, stories } = props;
  return (
    <View>
      <Text variant="headlineLarge">{title}</Text>
      <FlatList
        data={stories}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemWapper>
            <StoryCard story={item} />
          </ItemWapper>
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<ActivityIndicator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1 / 2,
    padding: 8,
  },
});

export default StoriesList;
