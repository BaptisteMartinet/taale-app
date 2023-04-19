import { action, makeObservable, observable } from 'mobx';

class OpenState {
  constructor(public isOpen: boolean = false) {
    makeObservable(this, {
      isOpen: observable,
      open: action.bound,
      close: action.bound,
      toggle: action.bound,
    });
  }

  public open() {
    this.isOpen = true;
  }

  public close() {
    this.isOpen = false;
  }

  public toggle() {
    this.isOpen = !this.isOpen;
  }
}

export default OpenState;
