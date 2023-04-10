import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';
import type { Story } from 'store/screens/library/api';

import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

export interface StoryPreviewProps {
  story: Story;
}

const StoryPreview = (props: StoryPreviewProps) => {
  const { story } = props;
  const { id, title, createdAt } = story;
  const { t } = useTranslation('screens', { keyPrefix: 'library' });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate('StoryViewer', { storyId: id })}
    >
      <Card.Title
        title={title}
        titleVariant="bodyLarge"
        subtitle={format(createdAt, t('misc.dateFormat'))}
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
