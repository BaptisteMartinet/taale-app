import { action, computed, makeObservable, observable, runInAction } from 'mobx';

export type FetchableStatus = 'uninitialized' | 'pending' | 'success' | 'error';

export interface FetchableOpts<ResultType> {
  thenUnhandled?: (result: ResultType) => void,
  catchUnhandled?: (error: Error) => void,
}

class Fetchable<ArgsType extends any[], ResultType> {
  public result: ResultType | undefined = undefined;
  public lastResult: ResultType | undefined = undefined;
  public error: Error | undefined = undefined;
  public lastError: Error | undefined = undefined;
  public status: FetchableStatus = 'uninitialized';

  constructor(private fetch: (...args: ArgsType) => Promise<ResultType>, private opts: FetchableOpts<ResultType> = {}) {
    makeObservable(this, {
      result: observable,
      lastResult: observable,
      error: observable,
      lastError: observable,
      status: observable,
      setResult: action,
      setError: action,
      setStatus: action,
      loading: computed,
      reset: action,
    });
  }

  public setResult(result: ResultType) {
    this.result = result;
    this.lastResult = result;
    this.error = undefined;
    this.lastError = undefined;
    this.status = 'success';
  }

  public setError(error: Error) {
    this.error = error;
    this.lastError = error;
    this.result = undefined;
    this.lastResult = undefined;
    this.status = 'error';
  }

  public setStatus(status: FetchableStatus) {
    this.status = status;
    if (status === 'pending') {
      this.result = undefined;
      this.error = undefined;
    }
  }

  public get loading() {
    return this.status === 'pending';
  }

  /**
   * Resets the Fetchable to its uninitialized state
   */
  public reset() {
    this.result = undefined;
    this.lastResult = undefined;
    this.error = undefined;
    this.lastError = undefined;
    this.status = 'uninitialized';
  }

  /**
   * Returns the last result, reloads otherwise.
   */
  public ensureSuccess(...args: ArgsType) {
    if (this.status === 'success')
      return this.result as ResultType;
    return this.ensureSuccessReload(...args);
  }

  /**
   * Reloads and returns the result.
   * Does not handle race conditions between reloads
   */
  public async ensureSuccessReload(...args: ArgsType) {
    const { thenUnhandled, catchUnhandled } = this.opts;
    this.setStatus('pending');
    return this.fetch(...args).then((res => {
      this.setResult(res);
      thenUnhandled?.(res);
      return res;
    })).catch(error => {
      this.setError(error);
      catchUnhandled?.(error);
      throw error;
    });
  }
}

export default Fetchable;
