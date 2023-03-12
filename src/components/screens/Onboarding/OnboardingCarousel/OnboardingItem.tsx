import type { ImageSourcePropType } from 'react-native';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  useWindowDimensions,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface OnboardingItemProps {
  image: ImageSourcePropType;
  title: string;
  description?: string;
}

const OnboardingItem = (props: OnboardingItemProps) => {
  const { image, title, description } = props;
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={image} style={styles.image} />
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        {description !== undefined ?
          <Text style={styles.description}>{description}</Text>
          : <IconButton
              icon="arrow-right-circle"
              iconColor="whitesmoke"
              size={96}
              onPress={() => {
                AsyncStorage.setItem('onboarding', 'completed').catch(e => console.error(e));
                navigation.replace('Home');
              }}
            />
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 0.7,
    width: '100%',
    resizeMode: 'contain',
  },
  texts: {
    flex: 0.3,
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'whitesmoke',
    textAlign: 'center',
  },
  description: {
    paddingHorizontal: 40,
    fontSize: 16,
    fontWeight: '500',
    color: 'whitesmoke',
    textAlign: 'justify',
  },
});

export default OnboardingItem;
