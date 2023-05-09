import type { FlatListProps } from 'react-native';
import type { Sentence as SentenceT } from './Sentence';

import React from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Divider } from 'react-native-paper';
import Sentence from './Sentence';

export type OmittedProps = 'renderItem' | 'keyExtractor' | 'ListEmptyComponent' | 'ItemSeparatorComponent';

export interface SentencesListProps extends Omit<FlatListProps<SentenceT>, OmittedProps> {
  disableControls?: boolean;
  onReport?: (sentence: SentenceT) => void,
  onMarkedCompleted?: (sentence: SentenceT) => void,
}

const SentencesList = (props: SentencesListProps) => {
  const { disableControls, onReport, onMarkedCompleted, ...passedProps } = props;
  return (
    <FlatList
      {...passedProps}
      renderItem={({ item }) => (
        <Sentence
          sentence={item}
          disableControls={disableControls}
          onReport={onReport}
          onMarkedCompleted={onMarkedCompleted}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={ActivityIndicator}
      ItemSeparatorComponent={() => <Divider bold style={{ width: '8%', backgroundColor: 'mediumaquamarine' }} />}
    />
  );
};

export default SentencesList;
