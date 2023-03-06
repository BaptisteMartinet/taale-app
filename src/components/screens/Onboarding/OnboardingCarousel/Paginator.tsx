import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface PaginatorProps {
  itemsCount: number;
  currentItemIdx: number | null;
}

const Paginator = (props: PaginatorProps) => {
  const { itemsCount, currentItemIdx } = props;
  return (
    <View style={styles.container}>
      {Array.from({ length: itemsCount }, (_, idx) => (
        <View key={idx} style={[styles.dot, { opacity: (idx === currentItemIdx ? 1 : 0.5) }]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
    marginHorizontal: 5,
  },
});

export default Paginator;
