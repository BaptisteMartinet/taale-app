import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Avatar, List } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import store from 'store/screens/home';

const Statistics = observer(() => {
  const { t } = useTranslation('screens', { keyPrefix: 'home.statistics' });
  const formatValue = (value: number | undefined): string => (
    value !== undefined ? value.toString() : t('nullValue')
  );
  const statistics = store.statistics.result;
  return (
    <Card style={styles.container}>
      <Card.Title
        title={t('title')}
        titleVariant="titleLarge"
        titleStyle={{ fontWeight: 'bold' }}
        right={(props) => (
          <Avatar.Icon
            {...props}
            icon="chart-donut"
            color="whitesmoke"
            size={48}
            style={{ backgroundColor: 'transparent' }}
          />
        )}
      />
      <Card.Content>
        <List.Item
          title={formatValue(statistics?.users)}
          description={t('stats.users')}
          left={props => <List.Icon {...props} icon="account-group" />}
          style={styles.itemStyle}
        />
        <List.Item
          title={formatValue(statistics?.openTrees)}
          description={t('stats.trees')}
          left={props => <List.Icon {...props} icon="pine-tree" />}
          style={styles.itemStyle}
        />
        <List.Item
          title={formatValue(statistics?.stories)}
          description={t('stats.stories')}
          left={props => <List.Icon {...props} icon="book-open-variant" />}
          style={styles.itemStyle}
        />
        <List.Item
          title={formatValue(statistics?.sentences)}
          description={t('stats.sentences')}
          left={props => <List.Icon {...props} icon="send" />}
          style={styles.itemStyle}
        />
      </Card.Content>
    </Card>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#323232',
  },
  itemStyle: {
    paddingVertical: 0,
  },
});

export default Statistics;
