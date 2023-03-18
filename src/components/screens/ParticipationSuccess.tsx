import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Button, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'ParticipationSuccess'>;

const ParticipationSuccess = (props: NavigationProps) => {
  const { navigation } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'participationSuccess' });
  return (
    <View style={styles.container}>
      <IconButton
        icon="check-circle-outline"
        iconColor="#1aa321"
        size={100}
      />
      <Text variant="titleLarge">{t('title')}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('PartialStory')}
        >
          <Text variant="headlineLarge">{t('partialStoryLink')}</Text>
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Home')}
        >
          <Text variant="headlineSmall">{t('homeLink')}</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 100,
  },
  button: {
    marginVertical: 15,
  },
});

export default ParticipationSuccess;
