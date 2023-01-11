import { observable, makeObservable, action } from 'mobx';

export type Duration = 'short' | 'medium' | 'long';

export interface DisplayOpts {
  duration?: Duration,
}

const DefaultDurationMs = 3000;

const DurationToMs = new Map<Duration, number>([
  ['short', 1000],
  ['long', 3000],
  ['long', 5000],
]);

class SnackbarStore {
  visible: boolean = false;
  msg: string = '';
  duration: number = DefaultDurationMs;

  constructor() {
    makeObservable(this, {
      visible: observable,
      msg: observable,
      duration: observable,
      display: action,
      dismiss: action,
    });
  }

  display(msg: string, opts: DisplayOpts = {}) {
    this.msg = msg;
    const { duration } = opts;
    if (duration)
      this.duration = DurationToMs.get(duration) ?? DefaultDurationMs;
    else if (this.duration != DefaultDurationMs)
      this.duration = DefaultDurationMs;
    this.visible = true;
  }

  dismiss() {
    this.visible = false;
  }
}

export default new SnackbarStore();
