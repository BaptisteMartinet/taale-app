import type { TrackOptions } from './ObservablePromiseStatus';

import ObservablePromiseStatus from './ObservablePromiseStatus';

class Fetchable<ArgsType extends any[], ResultType> extends ObservablePromiseStatus<ResultType> {
  constructor(private fetch: (...args: ArgsType) => Promise<ResultType>, private opts: TrackOptions<ResultType>) {
    super();
  }

  /**
   * Returns the last fulfilled result, reloads otherwise.
   */
  public ensureSuccess(...args: ArgsType) {
    if (this.status === 'fulfilled')
      return this.result as ResultType;
    return this.ensureSuccessReload(...args);
  }

  /**
   * Reloads and returns the result.
   */
  public ensureSuccessReload(...args: ArgsType) {
    const promise = this.fetch(...args);
    this.track(promise, this.opts);
    return promise;
  }
}

export default Fetchable;
