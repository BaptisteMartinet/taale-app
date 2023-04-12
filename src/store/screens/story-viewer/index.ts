import Fetchable from 'core/utils/Fetchable';
import { GetStory } from './api';

class StoryViewerStore {
  public story = new Fetchable(GetStory, { catchUnhandled: console.error });

  public async refresh(storyId: number) {
    this.story.reset();
    await this.story.ensureSuccessReload({ storyId });
  }
}

export default new StoryViewerStore();
