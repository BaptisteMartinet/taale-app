import { Fetchable } from 'core/utils/promise';
import { MyStories, MySentencesCount } from './api';

class LibraryStore {
  public stories = new Fetchable(MyStories, { catchUnhandled: console.error });
  public mySentencesCount = new Fetchable(MySentencesCount, { catchUnhandled: console.error });

  public async refresh() {
    await this.stories.ensureSuccessReload();
    await this.mySentencesCount.ensureSuccessReload();
  }
}

export default new LibraryStore();
