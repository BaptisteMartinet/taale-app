import type { Story } from 'store/screens/library/api';

import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { format } from 'date-fns';

// todo improve design
// todo navigation to StoryViewer page

export interface StoryPreviewProps {
  story: Story;
}

const StoryPreview = (props: StoryPreviewProps) => {
  const { story } = props;
  const { title, createdAt } = story;
  return (
    <Card style={styles.card} onPress={() => { console.warn('Not handled') }}>
      <Card.Title
        title={title}
        titleVariant="bodyLarge"
        subtitle={format(createdAt, 'dd/MM/yyyy')}
        subtitleVariant="labelSmall"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
});

export default StoryPreview;
