import type { Story } from './api';

import { makeObservable, observable, action } from 'mobx';
import { GetStory } from './api';

class StoryViewerStore {
  public story: Story | null = null;

  constructor() {
    makeObservable(this, {
      story: observable,
      setStory: action,
    });
  }

  setStory(story: Story) {
    this.story = story;
  }

  public async refresh(storyId: number) {
    const res = await GetStory({ storyId });
    this.setStory(res.data.public.story);
  }
}

export default new StoryViewerStore();
