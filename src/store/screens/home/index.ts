import { Fetchable, OpenState } from 'core/utils';
import { GetDailyStory, GetStatistics } from './api';

class HomeStore {
  public dailyStory = new Fetchable(GetDailyStory, { catchUnhandled: console.error });
  public statistics = new Fetchable(GetStatistics, { catchUnhandled: console.error });
  public settingsOpenState = new OpenState();

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
