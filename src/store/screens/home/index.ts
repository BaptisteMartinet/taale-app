import { Fetchable } from 'core/utils/promise';
import { GetDailyStory, GetStatistics } from './api';

class HomeStore {
  public dailyStory = new Fetchable(GetDailyStory, { catchUnhandled: console.error });
  public statistics = new Fetchable(GetStatistics, { catchUnhandled: console.error });

  public pullRefresh() {
    return Promise.all([
      this.dailyStory.ensureSuccessReload(),
      this.statistics.ensureSuccessReload(),
    ]);
  }

  public refresh() {
    return Promise.all([
      this.dailyStory.ensureSuccess(),
      this.statistics.ensureSuccess(),
    ]);
  }
}

export default new HomeStore();
