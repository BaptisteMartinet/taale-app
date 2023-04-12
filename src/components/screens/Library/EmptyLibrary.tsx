import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Images } from 'core/constants';

const EmptyLibrary = () => {
  const { t } = useTranslation('screens', { keyPrefix: 'library' });
  return (
    <View style={styles.container}>
      <Image source={Images.misc.empty} style={styles.image} />
      <Text variant="titleLarge">{t('emptyLibrary')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
});

export default EmptyLibrary;
