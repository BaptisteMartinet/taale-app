import { makeObservable, observable, action, computed } from 'mobx';

export type PromiseStatus = 'pending' | 'fulfilled' | 'rejected';

export interface TrackOptions<ResultType> {
  thenUnhandled?: (result: ResultType) => void,
  thenDropped?: (result: ResultType) => void,
  catchUnhandled?: (error: Error) => void,
  catchDropped?: (error: Error) => void,
  finallyUnhandled?: () => void,
  finallyDropped?: () => void,
}

class ObservablePromiseStatus<ResultType> {
  public lastResult: ResultType | undefined = undefined;
  public lastError: Error | undefined = undefined;
  public status: PromiseStatus | undefined = undefined;
  public currentPromise: Promise<ResultType> | null = null;

  constructor() {
    makeObservable(this, {
      lastResult: observable,
      lastError: observable,
      status: observable,
      setResult: action,
      setError: action,
      reset: action,
      track: action,
      result: computed,
      error: computed,
      tracking: computed,
      loading: computed,
      finished: computed,
    });
  }

  public setResult(result: ResultType) {
    this.lastResult = result;
    this.lastError = undefined;
    this.status = 'fulfilled';
  }

  public setError(error: Error) {
    this.lastError = error;
    this.lastResult = undefined;
    this.status = 'rejected';
  }

  public reset() {
    this.lastResult = undefined;
    this.lastError = undefined;
    this.status = undefined;
    this.currentPromise = null;
  }

  public get result() {
    if (this.status === 'pending')
      return undefined;
    return this.lastResult;
  }

  public get error() {
    if (this.status === 'pending')
      return undefined;
    return this.lastError;
  }

  public get tracking() {
    return this.status !== undefined;
  }

  public get loading() {
    return this.status === 'pending';
  }

  public get finished() {
    return this.status === 'fulfilled' || this.status === 'rejected';
  }

  public track(promise: Promise<ResultType>, opts: TrackOptions<ResultType>) {
    const {
      thenUnhandled,
      thenDropped,
      catchUnhandled,
      catchDropped,
      finallyUnhandled,
      finallyDropped,
    } = opts;
    this.currentPromise = promise;
    this.status = 'pending';
    promise.then((result) => {
      if (promise !== this.currentPromise) {
        thenDropped?.(result);
        return;
      }
      this.setResult(result);
      thenUnhandled?.(result);
    }).catch((error) => {
      if (promise !== this.currentPromise) {
        catchDropped?.(error);
        return;
      }
      this.setError(error);
      catchUnhandled?.(error);
    }).finally(() => {
      if (promise != this.currentPromise) {
        finallyDropped?.();
        return;
      }
      finallyUnhandled?.();
    });
  }
}

export default ObservablePromiseStatus;
