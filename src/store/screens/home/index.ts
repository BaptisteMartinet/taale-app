import type { Story } from './api';

import { action, makeObservable, observable } from 'mobx';
import { GetDailyStory } from './api';

class HomeStore {
  public dailyStory: Story | null = null;

  constructor() {
    makeObservable(this, {
      dailyStory: observable,
      setDailyStory: action,
    });
  }

  setDailyStory(story: Story | null) {
    this.dailyStory = story;
  }

  async init() {
    const res = await GetDailyStory();
    this.setDailyStory(res.data.public.storyOfTheDay);
  }
}

export default new HomeStore();
