import type { Sentence } from './api';

import { makeObservable, observable, action } from 'mobx';
import { GetPartialStory } from './api';

class PartialStoryStore {
  public partialStory: Sentence[] | null = null;

  constructor() {
    makeObservable(this, {
      partialStory: observable,
      setPartialStory: action,
    });
  }

  public setPartialStory(partialStory: Sentence[]) {
    this.partialStory = partialStory;
  }

  public async refresh() {
    const res = await GetPartialStory();
    this.setPartialStory(res.data.authenticated.partialStory);
  }
}

export default new PartialStoryStore();
