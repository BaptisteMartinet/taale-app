import { makeObservable, computed } from 'mobx';
import Fetchable from 'core/utils/Fetchable';
import { GetPartialStory } from './api';

class PartialStoryStore {
  public partialStory = new Fetchable(GetPartialStory, { catchUnhandled: console.error });

  constructor() {
    makeObservable(this, {
      lastSentence: computed,
    });
  }

  public get lastSentence() {
    if (this.partialStory.result === undefined)
      return null;
    return this.partialStory.result.at(-1);
  }

  public async refresh() {
    this.partialStory.reset();
    this.partialStory.ensureSuccessReload();
  }
}

export default new PartialStoryStore();
