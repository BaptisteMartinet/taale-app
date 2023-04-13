import React from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { handleWithSnack } from 'core/utils/promises';
import accountStore from 'store/common/account';
import sentenceStore from 'store/common/sentence';

export interface Owner {
  id: number;
  username: string;
}

export interface Sentence {
  id: number;
  text: string;
  owner: Owner;
  createdAt: number;
}

export interface SentenceProps {
  sentence: Sentence;
  disableControls?: boolean;
  onReport?: (sentence: Sentence) => void,
  onMarkedCompleted?: (sentence: Sentence) => void,
}

const Sentence = (props: SentenceProps) => {
  const { sentence, disableControls, onReport, onMarkedCompleted } = props;
  const { t } = useTranslation('common', { keyPrefix: 'sentencesList' });
  const [menuVisibility, setMenuVisibility] = React.useState(false);
  return (
    <Menu
      visible={menuVisibility}
      onDismiss={() => setMenuVisibility(false)}
      anchor={
        <Text
          style={[
            styles.text,
            { fontWeight: (sentence.owner.id === accountStore.user?.id ? 'bold' : undefined) }
          ]}
          onPress={() => setMenuVisibility(true)}
        >
          {sentence.text}
        </Text>
      }
    >
      <Menu.Item
        titleStyle={styles.userTitle}
        title={`u/${sentence.owner.username} - ${format(sentence.createdAt, 'dd/MM/yy HH:mm')}`}
      />
      <Divider />
      <Menu.Item
        title={t('report')}
        disabled={disableControls}
        onPress={() => {
          const promise = sentenceStore.report({ sentenceId: sentence.id });
          handleWithSnack(promise, {
            successMessage: t('reportSuccessfull'),
            onSuccess: () => {
              setMenuVisibility(false);
              onReport?.(sentence);
            },
            errorMessage: true,
          });
        }}
      />
      <Menu.Item
        title={t('markCompleted')}
        disabled={disableControls}
        onPress={() => {
          const promise = sentenceStore.markCompleted({ sentenceId: sentence.id });
          handleWithSnack(promise, {
            successMessage: t('markCompletedSuccessfull'),
            onSuccess: () => {
              setMenuVisibility(false);
              onMarkedCompleted?.(sentence);
            },
            errorMessage: true,
          });
        }}
      />
    </Menu>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#fafafa',
    lineHeight: 32,
  },
  userTitle: {
    fontWeight: 'bold',
  },
});

export default Sentence;
