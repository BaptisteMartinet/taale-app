import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import snackbarStore from 'store/common/snackbar';
import store from 'store/screens/home';

const DailyStory = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation('screens', { keyPrefix: 'home.dailyStory' });
  return (
    <Card
      style={styles.container}
      onPress={() => {
        const storyId = store.dailyStory.result?.id;
        if (storyId === undefined)
          return snackbarStore.display(t('error'));
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
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#323232',
  },
});

export default DailyStory;
