import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';

export default class Confetti extends Helper {
  @service confetti;

  colors;
  options;

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
    this.fire(options, interval, continuous);
  }

  async fire(options, interval, continuous = true) {
    this.confetti.fire(options);
    if (continuous) {
      later(() => {
        this.fire(options, interval);
      }, interval);
    }
  }

  willDestroy() {
    this.confetti.running = false;
    this.confetti.reset();
  }
}
