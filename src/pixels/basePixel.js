import * as utils from '../utils';

export default class Pixel {
  constructor(element, colModifier, rowModifier, face) {
    this.element = element;
    this.colModifier = colModifier;
    this.rowModifier = rowModifier;
    this.face = face;
    this.squareSize = face.squareSize;
    this.paddingMod = face.paddingMod;

    if(this.element == 0) {
      return;
    }

    this.setUp();
    this.draw();
    this.restore();
  }

  setUp() {
    noStroke();
    const c = this.getAlphaColor();
    fill(c);
    push();
    this.applyDistortions();
  }

  applyDistortions() {
    if (this.face.isDrunk) {
      this.getDrunk();
    }
    if (this.face.jumbled) {
      this.jumble();
    }

  }

  draw() {
    rect(
      0 - this.paddingMod/2, 
      0 - this.paddingMod/2, 
      this.width(), 
      this.height()
    );
    // this.drawRect(element, colModifier, rowModifier);
  }

  restore() {
    pop();
  }

  width() {
    return (this.squareSize * this.colModifier + this.paddingMod);
  }

  height() {
    return (this.squareSize * this.rowModifier + this.paddingMod);
  }

  getDrunk() {
    translate(this.width()/2, this.height()/2);
    const rot = this.face.R.random_num(-this.face.maxRotation, this.face.maxRotation);
    rotate(rot);
    translate(-this.width()/2, -this.height()/2);
  }

  getAlphaColor() {
    let c = this.face.colors[this.element-1];
    let maxAlpha = 250;
    if(this.face.alphaNoise) {
      c.setAlpha(this.face.R.random_num(maxAlpha - 100, maxAlpha))
    } 

    return c;
  }

  jumble() {
    const r = this.face.R;
    const scrambleFactor = this.face.scrambleFactor;

    translate(
      r.random_num(-scrambleFactor, scrambleFactor) * this.colModifier * this.squareSize, 
      r.random_num(-scrambleFactor, scrambleFactor) * this.rowModifier * this.squareSize
    )
  }

  adjustWeight() {
    const weight = utils.relSize(6 - this.element);    
    strokeWeight(weight);
  }

}
