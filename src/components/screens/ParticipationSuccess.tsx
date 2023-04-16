import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { IconButton, Button, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'ParticipationSuccess'>;

const ParticipationSuccess = (props: NavigationProps) => {
  const { navigation } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'participationSuccess' });
  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        icon="check-circle-outline"
        iconColor="#1aa321"
        size={100}
      />
      <Text variant="titleLarge" style={styles.title}>{t('title')}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('PartialStory')}
        >
          <Text
            variant="headlineLarge"
            style={styles.buttonText}
          >
            {t('partialStoryLink')}
          </Text>
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Home')}
        >
          <Text
            variant="titleSmall"
            style={styles.buttonText}
          >
            {t('homeLink')}
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  buttonsContainer: {
    marginTop: 94,
  },
  button: {
    marginVertical: 16,
  },
  buttonText: {
    color: '#2b2b2b',
  },
});

export default ParticipationSuccess;
