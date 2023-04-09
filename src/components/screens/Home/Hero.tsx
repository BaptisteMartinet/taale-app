import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import accountStore from 'store/common/account';
import { Images } from 'core/constants';

const Hero = observer(() => {
  const { t } = useTranslation('screens', { keyPrefix: 'home.hero' });
  return (
    <ImageBackground source={Images.home.treeBackground} resizeMode="cover" style={styles.container}>
      <View style={styles.textContainer}>
        <Text variant="titleLarge">{t('hello')}</Text>
        <Text variant="headlineLarge" style={{ fontWeight: 'bold' }}>
          {`${accountStore.user?.username ?? t('guest')}.`}
        </Text>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  container: {
    minHeight: 250,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 30,
    backgroundColor: 'rgba(40,40,40, 0.5)',
  },
});

export default Hero;
