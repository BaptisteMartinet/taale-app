import React from 'react';
import { StyleSheet, Text } from 'react-native';

export interface Owner {
  id: number;
  username: number;
}

export interface Sentence {
  id: number;
  text: string;
  owner: Owner;
  createdAt: number;
}

export interface SentenceProps {
  sentence: Sentence;
}

const Sentence = (props: SentenceProps) => {
  const { sentence } = props;
  return (
    <Text style={styles.text}>{sentence.text}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#fafafa',
    fontWeight: 'bold',
    lineHeight: 32,
  },
});

export default Sentence;
