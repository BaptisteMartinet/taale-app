import React from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { handleWithSnack } from 'core/utils/promises';
import sentenceStore from 'store/common/sentence';

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
  disableControls?: boolean;
}

const Sentence = (props: SentenceProps) => {
  const { sentence, disableControls } = props;
  const { t } = useTranslation('common', { keyPrefix: 'sentencesList' });
  const [menuVisibility, setMenuVisibility] = React.useState(false);
  return (
    <Menu
      visible={menuVisibility}
      onDismiss={() => setMenuVisibility(false)}
      anchor={
        <Text
          style={styles.text}
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
          const promise = sentenceStore.report(sentence.id);
          handleWithSnack(promise, {
            successMessage: t('reportSuccessfull'),
            errorMessage: true,
          });
        }}
      />
      <Menu.Item
        title={t('markCompleted')}
        disabled={disableControls}
        onPress={() => {
          const promise = sentenceStore.markCompleted(sentence.id);
          handleWithSnack(promise, {
            successMessage: t('markCompletedSuccessfull'),
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
    fontWeight: 'bold',
    lineHeight: 32,
  },
  userTitle: {
    fontWeight: 'bold',
  },
});

export default Sentence;
