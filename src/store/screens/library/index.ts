import type { Story } from './api';

import { action, makeObservable, observable } from 'mobx';
import { MyStories } from './api';

class LibraryStore {
  public loading: boolean = false;
  public stories: Story[] | null = null;

  constructor() {
    makeObservable(this, {
      loading: observable,
      stories: observable,
      setLoading: action,
      setStories: action,
    });
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setStories(stories: Story[]) {
    this.stories = stories;
  }

  public async refresh() {
    this.setLoading(true);
    const stories = await MyStories();
    this.setStories(stories.data.authenticated.myStories);
    this.setLoading(false);
  }
}

export default new LibraryStore();
