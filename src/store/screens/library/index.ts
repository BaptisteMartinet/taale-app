import type { Story } from './api';

import { action, makeObservable, observable } from 'mobx';
import { MyStories } from './api';

class LibraryStore {
  public stories: Story[] | null = null;

  constructor() {
    makeObservable(this, {
      stories: observable,
      setStories: action,
    });
  }

  setStories(stories: Story[]) {
    this.stories = stories;
  }

  public async refresh() {
    const stories = await MyStories();
    this.setStories(stories.data.authenticated.myStories);
  }
}

export default new LibraryStore();
