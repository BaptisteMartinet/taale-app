import type { Story } from 'store/screens/home/api';

import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Surface, TouchableRipple } from 'react-native-paper';

export interface StoryCardProps {
  story: Story;
}

const StoryCard = (props: StoryCardProps) => {
  const { story } = props;
  return (
    <Surface style={styles.container}>
      <TouchableRipple
        style={styles.ripple}
        onPress={() => console.warn('Not handled')}>
        <Text variant="bodyLarge" numberOfLines={5}>{story.title}</Text>
      </TouchableRipple>
    </Surface >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    aspectRatio: 1,
    borderRadius: 8,
  },
  ripple: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
  },
});

export default StoryCard;
