import Pixel from './pixels/basePixel';
import OutlinePixel from './pixels/outlinePixel';

export default Pixel;

export class CirclePixel extends Pixel {
  draw() {
    ellipse(
      this.width()/2,
      this.height()/2,
      this.width(), 
      this.height()
    );
  }
}

export class OutlineCirclePixel extends OutlinePixel {
  draw() {
    ellipse(
      this.width()/2,
      this.height()/2,
      this.width(),
      this.height()
    );
  }
}

export class StrokeWeightPixel extends Pixel { // also used in the etching one
  setUp() {
    noFill();
    const c = this.getAlphaColor();
    stroke(c);
    this.adjustWeight();
    push();
    this.applyDistortions();
  }
}

export class WeightCirclePixel extends StrokeWeightPixel {
  draw() {
    ellipse(
      this.width()/2,
      this.height()/2,
      this.width(),
      this.height()
    );
  }
}
