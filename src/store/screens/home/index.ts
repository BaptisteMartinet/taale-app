import type { Story, StatisticsQuery } from './api';

import { action, makeObservable, observable } from 'mobx';
import { GetDailyStory, GetStatistics } from './api';

class HomeStore {
  public dailyStory: Story | null = null;
  public statistics: StatisticsQuery | null = null;

  constructor() {
    makeObservable(this, {
      dailyStory: observable,
      statistics: observable,
      setDailyStory: action,
      setStatistics: action,
    });
  }

  setDailyStory(story: Story | null) {
    this.dailyStory = story;
  }

  setStatistics(statistics: StatisticsQuery) {
    this.statistics = statistics;
  }

  public async refresh() {
    const [dailyStoryRes, statisticsRes] = await Promise.all([
      GetDailyStory(),
      GetStatistics(),
    ]);
    this.setDailyStory(dailyStoryRes.data.public.dailyStory);
    this.setStatistics(statisticsRes.data.public.statistics);
  }
}

export default new HomeStore();
