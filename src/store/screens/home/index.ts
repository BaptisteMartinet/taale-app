import type { Story, StatisticsQuery } from './api';

import { action, makeObservable, observable } from 'mobx';
import { GetDailyStory, GetStatistics } from './api';

class HomeStore {
  public loading: boolean = false;
  public dailyStory: Story | null = null;
  public statistics: StatisticsQuery | null = null;

  constructor() {
    makeObservable(this, {
      loading: observable,
      dailyStory: observable,
      statistics: observable,
      setLoading: action,
      setDailyStory: action,
      setStatistics: action,
    });
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setDailyStory(story: Story | null) {
    this.dailyStory = story;
  }

  setStatistics(statistics: StatisticsQuery) {
    this.statistics = statistics;
  }

  public async refresh() {
    this.setLoading(true);
    const [dailyStoryRes, statisticsRes] = await Promise.all([
      GetDailyStory(),
      GetStatistics(),
    ]);
    this.setDailyStory(dailyStoryRes.data.public.dailyStory);
    this.setStatistics(statisticsRes.data.public.statistics);
    this.setLoading(false);
  }
}

export default new HomeStore();
