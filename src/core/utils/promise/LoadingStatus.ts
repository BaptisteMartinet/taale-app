import { makeObservable, observable, action } from 'mobx';

class LoadingStatus {
  public loading: boolean = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      setLoading: action,
      setLoaded: action,
    });
  }

  public setLoading() {
    this.loading = true;
  }

  public setLoaded() {
    this.loading = false;
  }
}

export default LoadingStatus;
