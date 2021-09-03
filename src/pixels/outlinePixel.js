import Pixel from './basePixel';

export default class OutlinePixel extends Pixel {
  setUp() {
    noFill();
    const c = this.getAlphaColor();
    stroke(c);
    push();
    this.applyDistortions();
  }
}
