import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressBar, Text } from 'react-native-paper';

export interface CharsProgressProps {
  maxCharsCount: number,
  currentCharsCount: number,
}

const CharsProgress = (props: CharsProgressProps) => {
  const { maxCharsCount, currentCharsCount } = props;
  const progress = currentCharsCount / maxCharsCount;
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} style={styles.progressBar} />
      <Text variant="labelLarge">{`  ${currentCharsCount}/${maxCharsCount}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    width: 64,
  },
});

export default CharsProgress;
