import type { Story } from './api';

import { action, makeObservable, observable } from 'mobx';
import { GetStoryOfTheDay } from './api';

class HomeStore {
  public storyOfTheDay: Story | null = null;

  constructor() {
    makeObservable(this, {
      storyOfTheDay: observable,
      setStoryOfTheDay: action,
    });
  }

  setStoryOfTheDay(story: Story | null) {
    this.storyOfTheDay = story;
  }

  async init() {
    const res = await GetStoryOfTheDay();
    this.setStoryOfTheDay(res.data.public.storyOfTheDay);
  }
}

export default new HomeStore();
