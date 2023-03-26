import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const MyLibrary = () => {
  const { t } = useTranslation('screens', { keyPrefix: 'home.myLibrary' });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Card
      style={styles.container}
      onPress={() => navigation.navigate('Library')}
    >
      <Card.Title
        title={t('title')}
        subtitle={t('subtitle')}
        titleVariant="titleLarge"
        titleStyle={{ fontWeight: 'bold' }}
        right={(props) => (
          <Avatar.Icon
            icon="bookshelf"
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

export default MyLibrary;
