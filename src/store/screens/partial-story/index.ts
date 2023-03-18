import type { Sentence } from './api';

import { makeObservable, observable, action, computed } from 'mobx';
import { GetPartialStory } from './api';

class PartialStoryStore {
  public partialStory: Sentence[] | null = null;

  constructor() {
    makeObservable(this, {
      partialStory: observable,
      setPartialStory: action,
      lastSentence: computed,
    });
  }

  public get lastSentence() {
    return this.partialStory?.at(-1);
  }

  public setPartialStory(partialStory: Sentence[] | null) {
    this.partialStory = partialStory;
  }

  public async refresh() {
    this.setPartialStory(null);
    const res = await GetPartialStory();
    this.setPartialStory(res.data.authenticated.partialStory);
  }
}

export default new PartialStoryStore();
