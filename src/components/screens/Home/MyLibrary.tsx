import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import accountStore from 'store/common/account';

const MyLibrary = () => {
  const { t } = useTranslation('screens', { keyPrefix: 'home.myLibrary' });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Card
      style={styles.container}
      onPress={() => {
        if (accountStore.user !== null)
          navigation.navigate('Library');
        else
          navigation.navigate('Login');
      }}
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
