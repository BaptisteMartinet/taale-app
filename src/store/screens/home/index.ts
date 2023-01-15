import type { Story } from './api';

import { action, makeObservable, observable } from 'mobx';
import { GetStories } from './api';

class HomeStore {
  stories: Story[] = [];

  constructor() {
    makeObservable(this, {
      stories: observable,
      setStories: action,
    });
  }

  setStories(stories: Story[]) {
    this.stories = stories;
  }

  async init() {
    const { data } = await GetStories();
    this.setStories(data.public.stories);
  }
}

export default HomeStore;
