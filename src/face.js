// Turn the hash into hash pairs.
// This means 0xeca4cf6288eb455f388301c28ac01a8da5746781d22101a65cb78a96a49512c8
// turns into ["ec", "a4", "cf", "62", "88", "eb", ...]

import Random from './random';
import HashUtils from './hashUtils';
import * as utils from './utils';
import * as c from './constants';

let decPairs, seed;

/// ok, those were the utils.

let padding, gridArea, face;

const minSkew = 0.5;
const maxSkew = 1.2;
const defaultColor = '#1f1f1f';
const noiseMod = 0.5;

function setFeature(k, v) {
  features[k] = v;
}

function getColors(s) {
  return utils.coolorToHex(s);
}

class Face {
  constructor() {
    const u = new HashUtils();
    this.decPairs = u.decPairs;  
    this.R = new Random(u.seed);
    noiseSeed(u.seed);

    this.padding = map(this.decPairs[0], 0, 255, 0, utils.relSize(20)); // 0 = padding
    setFeature('padding', this.padding);

    this.flipped = u.whatAreTheOdds(8, 0.5);
    setFeature('flipped', this.flipped);
    this._flipSkeleton();

    const totalHeight = height - (2*this.padding);
    this.totalWidth = width - (2*this.padding);
    this.baseSquareSize = totalHeight / this.skeleton.length;

    this.colors = getColors(u.getFromArray(1, c.colorOptions)); // 1 = colors
    setFeature('first color', this.colors[0]);

    this.paddingMod = u.getFromArray(2, [utils.relSize(20), utils.relSize(-2), utils.relSize(2), utils.relSize(2), utils.relSize(2), utils.relSize(10)])
    setFeature('paddingMod', this.paddingMod);    // 2 = the padding of the squares
    this.calcOffsets();

    this.background = u.whatAreTheOdds(3, 0.5) ? '#0f0f0f' : '#222222'; // 3 = background

    this.subsegments = Math.floor(map(this.decPairs[4], 0, 255, 3, 15)); // 4 = how wiggly are the lines
    setFeature('subsegments', this.subsegments);

    this.maxRotation = u.percentMap(7)/4 + 0.05;
    setFeature('maxRotation', this.maxRotation);

    this.drawMethod = u.getFromArray(9, c.METHODS);
    setFeature('drawMethod', this.drawMethod);

    this.standardWeight = u.getFromArray(6, [utils.relSize(2), utils.relSize(1), utils.relSize(2), utils.relSize(1), utils.relSize(2), utils.relSize(3)]);
    if(this.drawMethod == SQUIGGLES_ONLY || this.drawMethod == DRUNK_SQUIGGLES) {
      this.standardWeight += utils.relSize(1);
    }
    strokeWeight(this.standardWeight);    



    // this.setBlendMode();

    this.squaresPerSquare = u.getFromArray(12, [1, 2, 3, 4, 5]);

    let minEtches = 5;
    let maxEtches = 8;
    if(this.drawMethod == ETCHED || this.drawMethod == ETCHED_HORIZONTAL || this.drawMethod == ETCHED_VERTICAL) {
      this.squaresPerSquare = u.getFromArray(12, [1, 2]);;
      if (this.squaresPerSquare == 2) {
        this.squaresPerSquare = u.getFromArray(12, [1, 2]);;
        minEtches = 2;
        maxEtches = 5;
      }
    }

    this.etchesPerBox = map(this.decPairs[10], 0, 255, minEtches, maxEtches);
    setFeature('etches per box', this.etchesPerBox);

    this.squareSize = this.baseSquareSize / this.squaresPerSquare;
    this.multiNoise = false;
    this.twoDirectionNoise = false;
    if (this.squaresPerSquare > 1) {
      this.multiNoise = u.whatAreTheOdds(13, 0.5);
      this.twoDirectionNoise = u.whatAreTheOdds(14, 0.5); // this won't matter if the above is false
    }
    this.alphaNoise = u.whatAreTheOdds(15, 0.2);

    this.scrambleFactor = map(this.decPairs[16], 0, 255, 0, 1.5);
    this.stars = u.whatAreTheOdds(17, 0.3) ? (u.percentMap(18) * u.percentMap(18)) : (false);
    console.log(this.stars);
  }

  setBlendMode() {
    this.blendMode = u.whatAreTheOdds(11, 0.1) ? OVERLAY : BLEND;
    if (this.blendMode == OVERLAY) {
      this.background = u.whatAreTheOdds(3, 0.5) ? '#444444' : '#666666';
    }

    blendMode(this.blendMode);
    setFeature('blendMode', this.blendMode);
  }

  setBackgroundBlocks() {
    this.drawBackgroundBlocks = u.whatAreTheOdds(5, 0.2);
  }

  getColumnMod(i) {
    return map(noise(i*noiseMod, 2), 0, 1, minSkew, maxSkew);
  }
  getRowMod(i) {
    return map(noise(i*noiseMod, 1), 0, 1, minSkew, maxSkew);
  }

  calcOffsets() {
    let h = 0;
    let w = 0;
    const squaresTall = this.skeleton.length;
    const squaresWide = this.skeleton[0].length;
    for (let i = 0; i < squaresWide; i++) {
      w += this.getColumnMod(i)* this.baseSquareSize;
    }
    for (let i = 0; i < squaresTall; i++) {
      h += this.getRowMod(i)* this.baseSquareSize;
    }
    w += this.paddingMod;
    h += this.paddingMod;
    this.offsetX = (width - w)/2;
    setFeature('offsetX', this.offsetX);
    this.offsetY = (height - h)/2;
    setFeature('offsetY', this.offsetY);
  }

  getNoised(x, array, factor, thisDirection = true) {
    const noiseF = this.scrambleFactor;
    let indexx = x;
    if(this.multiNoise && thisDirection) {
      indexx = (noise(x, factor) - 0.5)*noiseF + x;
      indexx = constrain(indexx, 0, array.length - 0.0001)
    }
    indexx = Math.floor(indexx);
    return indexx;
  }

  jumble(colModifier, rowModifier) {
    translate(
      this.R.random_num(-1, 1) * colModifier * this.squareSize, 
      this.R.random_num(-1, 1) * rowModifier * this.squareSize
    )

  }

  draw() {
    translate(this.offsetX, this.offsetY);
    background(this.background);
    push();
    for (let y = 0; y < this.skeleton.length; y += (1 / this.squaresPerSquare)) {

      let row = this.skeleton[Math.floor(y)];
      const rowModifier = this.getRowMod(y);
      let amountShifted = 0;

      for (let x = 0; x < row.length; x += (1 / this.squaresPerSquare)) {
        let indexx = this.getNoised(x, row, y/2);
        let indexy = this.getNoised(y, this.skeleton, 10 + x, this.twoDirectionNoise);

        let element = this.skeleton[indexy][indexx];

        if(element == 0 && this.stars && this.R.whatAreTheOdds(this.stars)) {
          element = this.R.random_int(1, 5);
        }

        const colModifier = this.getColumnMod(x);

        const squareWidth = colModifier * this.squareSize;
        amountShifted += squareWidth;

        switch (this.drawMethod) {
          case SQUARES:
            this.drawSquares(element, colModifier, rowModifier);
            break;
          case SQUARES_JUMBLED:
            push();
            this.jumble(colModifier, rowModifier);
            this.drawSquares(element, colModifier, rowModifier);
            pop();
            break;

          case SQUIGGLES_JUMBLED:
            push();
            this.jumble(colModifier, rowModifier);
            this.drawSquiggle(element, colModifier, rowModifier);
            pop();
            break;

          case SQUARES_AND_SQUIGGLES:
            this.drawSquares(element, colModifier, rowModifier);
            this.drawSquiggle(element,colModifier, rowModifier);
            break;
          case SQUIGGLES_ONLY:
            this.drawSquiggle(element,colModifier, rowModifier);
            break;
          case SQUIGGLE_CROSSED:
            this.drawSquiggle(element,colModifier, rowModifier, true);
            break;
          case ETCHED_HORIZONTAL:
            this.drawEtchedSquiggleH(element,colModifier, rowModifier);
            break;  
          case ETCHED_VERTICAL:
            this.drawEtchedSquiggleV(element,colModifier, rowModifier);
            break;  
          case ETCHED:
            this.drawEtchedSquiggleV(element,colModifier, rowModifier);
            this.drawEtchedSquiggleH(element,colModifier, rowModifier);
            break;
          case DRUNK_SQUARES:
            this.drawSquares(element, colModifier, rowModifier, true);
            break;
          case DRUNK_SQUIGGLES:
            this.drawSquiggle(element, colModifier, rowModifier, false, true);
            break;
          case CIRCLES_LOL:
            this.drawCircles(element, colModifier, rowModifier);
            break;
          // case CIRCLES_LOL:
          default:
            console.log("oh no!");
            break;
        }

        translate(squareWidth, 0);
      }
      translate(-amountShifted, this.squareSize * rowModifier);
      amountShifted = 0;
    }
    pop();
  }

  getDrunk(colModifier, rowModifier) {
    let w = (this.squareSize * colModifier + this.paddingMod)
    let h = (this.squareSize * rowModifier + this.paddingMod)
    translate(w/2, h/2);
    const rot = this.R.random_num(-this.maxRotation, this.maxRotation);
    rotate(rot);
    translate(-w/2, -h/2);
  }

  drawSquares(element, colModifier, rowModifier, drunk = false) {
    if (!this.drawBackgroundBlocks && element == 0) {
      return;
    }

    noStroke();
    const c = this.getAlphaColor(element);
    fill(c);

    push();
    if (drunk) {
      this.getDrunk(colModifier, rowModifier);
    }
    this.drawRect(element, colModifier, rowModifier);

    pop();
  }

  drawCircles(element, colModifier, rowModifier) {
    if (!this.drawBackgroundBlocks && element == 0) {
      return;
    }

    const c = this.colors[element-1] || defaultColor;
    stroke(c);
    noFill();
    ellipse(
      0 - this.paddingMod/2, 
      0 - this.paddingMod/2, 
      this.squareSize * colModifier + this.paddingMod, 
      this.squareSize * rowModifier + this.paddingMod
    );
  }

  getAlphaColor(element) {
    if(element > 0 && this.alphaNoise) {
      let c = this.colors[element-1];
      c.setAlpha(this.R.random_num(150, 255))
      return c;
    }

    return this.colors[element-1] || defaultColor;
  }

  drawSquiggle(element, colModifier, rowModifier, withCross = false, drunk = false) {
    if (!this.drawBackgroundBlocks && element == 0) {
      return;
    }
    const c = this.getAlphaColor(element);
    stroke(c);

    push();
    if (drunk) {
      this.getDrunk(colModifier, rowModifier);
    }    
    this.squiggleSquare(
      0, 
      0, 
      this.squareSize * colModifier + this.paddingMod, 
      this.squareSize * rowModifier + this.paddingMod
    );

    if (withCross) {
      this.squiggleCross(
        0, 
        0, 
        this.squareSize * colModifier + this.paddingMod, 
        this.squareSize * rowModifier + this.paddingMod
      );
    }
    pop();
  }

  drawEtchedSquiggleH(element, colModifier, rowModifier) {
    if (!this.drawBackgroundBlocks && element == 0) {
      return;
    }

    const c = this.getAlphaColor(element);
    stroke(c);

    const h = (this.squareSize * rowModifier) + this.paddingMod;
    const w = (this.squareSize * colModifier) + this.paddingMod;
    const delta = h / this.etchesPerBox;
    
    for (let etch = 0; etch < h; etch+= delta) {
      let thisDelta = delta * map(noise(etch+element * 0.3), 0, 1, -1, 1);
      let startNoise = map(noise((etch + element) * 209,  element*colModifier), 0, 1, -delta, delta)/2;

      this.squiggleLine(-startNoise, etch, w+(2*startNoise), etch + thisDelta);
    }
  }

  drawEtchedSquiggleV(element, colModifier, rowModifier) {

    if (!this.drawBackgroundBlocks && element == 0) {
      return;
    }
    const c = this.getAlphaColor(element);
    stroke(c);

    const h = (this.squareSize * rowModifier) + this.paddingMod;
    const w = (this.squareSize * colModifier) + this.paddingMod;
    const delta = w / this.etchesPerBox;

    for (let etch = 0; etch < w; etch += delta) {
      let thisDelta = delta * map(noise(etch * 0.3), 0, 1, -1, 1);
      let startNoise = map(noise((etch + element) / 0.2, colModifier), 0, 1, -delta, delta)/2;

      this.squiggleLine(etch, -startNoise, etch + thisDelta, h+(2*startNoise));
    }

  }

  squiggleCross(x, y, w, h) {
    const midX = x + (w/2)
    const midY = y + (h/2);
    this.squiggleLine(midX, y, midX, y+h);
    this.squiggleLine(x, midY, x+w, midY);
  }

  squiggleSquare(x, y, width, height) {
    const x2 = x + width;
    const y2 = y + height;

    push();

    this.squiggleLine(x, y, x2, y);
    this.squiggleLine(x, y, x, y2);
    this.squiggleLine(x2, y2, x2, y);
    this.squiggleLine(x2, y2, x, y2);    

    pop();
  }

  squiggleLine(x1, y1, x2, y2) {
    push();
    translate(x1, y1);
    let dX = x2 - x1;
    let dY = y2 - y1;
    let totalRotation = 0;
    for (let index = 0; index < this.subsegments; index++) {
      const thisMinR = -this.maxRotation - totalRotation;
      const thisMaxR = this.maxRotation - totalRotation;
      let rotation = map(this.R.random_dec(), 0, 1, thisMinR, thisMaxR);

      totalRotation += rotation;
      line(0, 0, dX/this.subsegments, dY/this.subsegments);
      translate(dX/this.subsegments, dY/this.subsegments);
      rotate(rotation);
    }
    pop();
  }

  drawRect(element, colModifier, rowModifier) {
    rect(
      0 - this.paddingMod/2, 
      0 - this.paddingMod/2, 
      this.squareSize * colModifier + this.paddingMod, 
      this.squareSize * rowModifier + this.paddingMod
    );
  }

  _flipSkeleton() {
    this.skeleton = c.faceSkeleton;
    if (this.flipped) {
      for (let r = 0; r < this.skeleton.length; r++) {
        this.skeleton[r].reverse();        
      }
    }
  }

}


let canvas;
function setup() {
  // Grab the smaller of the window sizes and use that as the canvas size.
  const smallerDimension = windowWidth < windowHeight ? windowWidth : windowHeight;
  canvas = createCanvas(smallerDimension, smallerDimension);
  canvas.parent("canvasParent");
  face = new Face();
  render();  
}

function render() {
  face.draw();
}

export default setup;