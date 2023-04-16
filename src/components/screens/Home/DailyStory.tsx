import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import assert from 'assert';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import store from 'store/screens/home';

const DailyStory = observer(() => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation('screens', { keyPrefix: 'home.dailyStory' });
  return (
    <Card
      style={styles.container}
      onPress={() => {
        const storyId = store.dailyStory.lastResult?.id;
        assert(storyId !== undefined);
        navigation.navigate('StoryViewer', { storyId });
      }}
    >
      <Card.Title
        title={t('title')}
        subtitle={t('subtitle')}
        titleVariant="titleLarge"
        titleStyle={{ fontWeight: 'bold' }}
        right={(props) => (
          <Avatar.Icon
            {...props}
            icon="calendar-today"
            color="whitesmoke"
            size={48}
            style={{ backgroundColor: 'transparent' }}
          />
        )}
      />
    </Card>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#323232',
  },
});

export default DailyStory;
