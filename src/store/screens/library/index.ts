import { Fetchable } from 'core/utils/promise';
import { MyStories } from './api';

class LibraryStore {
  public stories = new Fetchable(MyStories, { catchUnhandled: console.error });

  public async refresh() {
    await this.stories.ensureSuccessReload();
  }
}

export default new LibraryStore();
