import OutlinePixel from './outlinePixel';
import * as utils from '../utils';

export class SquigglePixel extends OutlinePixel {
  draw() {
    this.squiggleSquare(
      0 - this.paddingMod/2, 
      0 - this.paddingMod/2, 
      this.width(), 
      this.height()
    );
  }

  squiggleSquare(x, y, width, height) {
    const x2 = x + width;
    const y2 = y + height;
    this.squiggleLine(x, y, x2, y);
    this.squiggleLine(x, y, x, y2);
    this.squiggleLine(x2, y2, x2, y);
    this.squiggleLine(x2, y2, x, y2);
  }

  squiggleLine(x1, y1, x2, y2) {
    push();
    translate(x1, y1);
    let dX = x2 - x1;
    let dY = y2 - y1;
    let totalRotation = 0;
    for (let index = 0; index < this.face.subsegments; index++) {
      
      const thisMinR = -this.face.maxSquiggle - totalRotation;
      const thisMaxR = this.face.maxSquiggle - totalRotation;

      let rotation = map(this.face.R.random_dec(), 0, 1, thisMinR, thisMaxR);

      totalRotation += rotation;
      line(0, 0, dX/this.face.subsegments, dY/this.face.subsegments);
      translate(dX/this.face.subsegments, dY/this.face.subsegments);
      rotate(rotation);
    }
    pop();
  }
}

export class CrossedSquigglePixel extends SquigglePixel {
  draw() {
    super.draw();
    
    const x = 0 - this.paddingMod/2;
    const y = 0 - this.paddingMod/2;

    const midX = x + (this.width()/2)
    const midY = y + (this.height()/2);

    this.squiggleLine(midX, y, midX, y+this.height());
    this.squiggleLine(x, midY, x+this.width(), midY);
  }
}

export class EtchedPixel extends SquigglePixel {
  draw() {
    const delta = this.height() / this.face.etchesPerBox;
    for (let etch = 0; etch < this.height(); etch+= delta) {
      let thisDelta = map(this.face.R.random_dec(), 0, 1, -delta, delta);
      let startNoise = map(this.face.R.random_dec(), 0, 1, -delta, delta)/2;
      this.squiggleLine(-startNoise, etch, this.width()+(2*startNoise), etch + thisDelta);
    }
  }
}

export class EtchWeightPixel extends EtchedPixel {
  setUp() {
    noFill();
    const c = this.getAlphaColor();
    stroke(c);
    this.adjustWeight();
    push();
    this.applyDistortions();
  }
}