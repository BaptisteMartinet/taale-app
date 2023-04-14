import { Fetchable } from 'core/utils/promise';
import { GetStory } from './api';

class StoryViewerStore {
  public story = new Fetchable(GetStory, { catchUnhandled: console.error });

  public async refresh(storyId: number) {
    await this.story.ensureSuccessReload({ storyId });
  }
}

export default new StoryViewerStore();
