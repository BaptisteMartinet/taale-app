import { makeObservable, computed } from 'mobx';
import { Fetchable } from 'core/utils/promise';
import { GetPartialStory } from './api';

class PartialStoryStore {
  public partialStory = new Fetchable(GetPartialStory, { catchUnhandled: console.error });

  constructor() {
    makeObservable(this, {
      lastSentence: computed,
    });
  }

  public get lastSentence() {
    return this.partialStory.result?.at(-1);
  }

  public refresh() {
    return this.partialStory.ensureSuccessReload();
  }
}

export default new PartialStoryStore();
