import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { later, cancel } from '@ember/runloop';

export default class Confetti extends Helper {
  @service confetti;

  options;
  running;
  scheduledConfetti;

  compute(_, named) {
    let {
      interval = 2000,
      originX = 0.5,
      originY = 0.5,
      continuous = true,
      ...options
    } = { ...named };
    let origin = {
      x: originX,
      y: originY,
    };
    options = { ...options, origin: origin };
    this.running = true;
    this.fire(options, interval, continuous);
  }

  async fire(options, interval, continuous = true) {
    this.confetti.fire(options);
    if (continuous && this.running) {
      this.scheduledConfetti = later(() => {
        this.fire(options, interval);
      }, interval);
    }
  }

  willDestroy() {
    if (this.scheduledConfetti) {
      cancel(this.scheduledConfetti);
      this.scheduledConfetti = null;
    }
    this.running = false;
  }
}
