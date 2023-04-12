import Fetchable from 'core/utils/Fetchable';
import { GetDailyStory, GetStatistics } from './api';

class HomeStore {
  public dailyStory = new Fetchable(GetDailyStory, { catchUnhandled: console.error });
  public statistics = new Fetchable(GetStatistics, { catchUnhandled: console.error });

  public async refresh() {
    await Promise.all([
      this.dailyStory.ensureSuccessReload(),
      this.statistics.ensureSuccessReload(),
    ]);
  }
}

export default new HomeStore();
