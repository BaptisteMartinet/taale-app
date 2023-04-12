import { action, computed, makeObservable, observable, runInAction } from 'mobx';

export type FetchableStatus = 'uninitialized' | 'pending' | 'error' | 'success';

export interface FetchableOpts<ResultType> {
  thenUnhandled?: (result: ResultType) => void,
  catchUnhandled?: (error: Error) => void,
}

class Fetchable<ArgsType extends any[], ResultType> {
  public result: ResultType | undefined = undefined;
  public error: Error | undefined = undefined;
  public status: FetchableStatus = 'uninitialized';

  constructor(private fetch: (...args: ArgsType) => Promise<ResultType>, private opts: FetchableOpts<ResultType> = {}) {
    makeObservable(this, {
      result: observable,
      error: observable,
      status: observable,
      setResult: action,
      setError: action,
      setStatus: action,
      loading: computed,
      reset: action,
    });
  }

  setResult(result: typeof this.result) {
    this.result = result;
  }

  setError(error: typeof this.error) {
    this.error = error;
  }

  setStatus(status: typeof this.status) {
    this.status = status;
  }

  public get loading() {
    return this.status === 'pending';
  }

  /**
   * Resets the Fetchable to its uninitialized state
   */
  public reset() {
    this.setResult(undefined);
    this.setError(undefined);
    this.setStatus('uninitialized');
  }

  /**
   * Return the last result, reload otherwise.
   */
  public ensureSuccess(...args: ArgsType) {
    if (this.status === 'success')
      return this.result as ResultType;
    return this.ensureSuccessReload(...args);
  }

  /**
   * Reload and returns the result.
   * Does not handle race conditions between reloads
   */
  public async ensureSuccessReload(...args: ArgsType) {
    const { thenUnhandled, catchUnhandled } = this.opts;
    this.setStatus('pending');
    return this.fetch(...args).then((res => {
      runInAction(() => {
        this.setResult(res);
        this.setError(undefined);
        this.setStatus('success');
      });
      thenUnhandled?.(res);
      return res;
    })).catch(error => {
      runInAction(() => {
        this.setResult(undefined);
        this.setError(error);
        this.setStatus('error');
      });
      catchUnhandled?.(error);
      throw error;
    });
  }
}

export default Fetchable;
