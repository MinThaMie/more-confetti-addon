import Service from '@ember/service';
import confetti from 'canvas-confetti';

export default class ConfettiService extends Service {
  _promise = null;
  running = false;

  async load() {
    if (!this._promise) {
      this._promise = confetti;
    }

    return this._promise;
  }

  async fire(options) {
    // canvas-confetti makes use of the document and it doesn't really make
    // sense to run it in fastboot
    if (typeof FastBoot !== 'undefined') {
      return;
    }

    let fire = await this.load();
    return fire(options);
  }

  async reset() {
    let confetti = await this.load();

    confetti.reset();
  }

  play() {}
}
