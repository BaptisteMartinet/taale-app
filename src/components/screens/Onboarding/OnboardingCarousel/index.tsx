import type { OnboardingItemProps } from './OnboardingItem';

import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Images } from '_constants';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';

function getSlides(): Array<OnboardingItemProps> {
  const { t } = useTranslation('screens', { keyPrefix: 'onboarding' });
  return [
    {
      image: Images.onboarding.slide1,
      title: t('slide1.title'),
      description: t('slide1.description'),
    },
    {
      image: Images.onboarding.slide2,
      title: t('slide2.title'),
      description: t('slide2.description'),
    },
    {
      image: Images.onboarding.slide3,
      title: t('slide3.title'),
      description: t('slide3.description'),
    },
    {
      image: Images.onboarding.slide4,
      title: t('slide4.title'),
      description: t('slide4.description'),
    },
    {
      image: Images.onboarding.slide5,
      title: t('slide5.title'),
      description: t('slide5.description'),
    },
    {
      image: Images.onboarding.slide6,
      title: t('slide6.title'),
    },
  ];
}

const OnboardingCarousel = () => {
  const slides = getSlides();
  const [currentItemIdx, setCurrentItemIdx] = React.useState<number | null>(0);
  const handleViewableItemsChanged = React.useCallback((info: any) => ( // TODO bad typings
    setCurrentItemIdx(info.viewableItems.at(0)?.index ?? null)
  ), []);
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem {...item} />}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <Paginator itemsCount={slides.length} currentItemIdx={currentItemIdx} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default OnboardingCarousel;
