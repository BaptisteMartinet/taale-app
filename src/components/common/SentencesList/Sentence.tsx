import React from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';
import { Menu, Divider } from 'react-native-paper';

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
      <Menu.Item titleStyle={styles.userTitle} title={`u/${sentence.owner.username} (${format(sentence.createdAt, 'dd/MM/yy HH:mm')})`} />
      <Divider />
      <Menu.Item title={t('report')} onPress={() => { console.info('TODO report sentence') }} disabled />
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
    fontStyle: 'italic',
  },
});

export default Sentence;
