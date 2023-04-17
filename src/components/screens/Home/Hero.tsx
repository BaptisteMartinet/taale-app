import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { Images } from 'core/constants';
import store from 'store/screens/home';
import accountStore from 'store/common/account';

const Hero = observer(() => {
  const { t } = useTranslation('screens', { keyPrefix: 'home.hero' });
  return (
    <ImageBackground source={Images.home.treeBackground} resizeMode="cover" style={styles.container}>
      <View style={styles.textOverlay}>
        <Text variant="titleLarge">{t('hello')}</Text>
        <Text variant="headlineLarge" style={{ fontWeight: 'bold' }}>
          {`${accountStore.user?.username ?? t('guest')}.`}
        </Text>
        <IconButton
          icon="cog"
          size={30}
          style={styles.settingsIcon}
          onPress={store.settingsOpenState.open}
        />
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 250,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },
  textOverlay: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 30,
    backgroundColor: 'rgba(40,40,40, 0.5)',
  },
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 5,
  },
});

export default Hero;
