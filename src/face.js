// Turn the hash into hash pairs.
// This means 0xeca4cf6288eb455f388301c28ac01a8da5746781d22101a65cb78a96a49512c8
// turns into ["ec", "a4", "cf", "62", "88", "eb", ...]

import Random from './random';
import HashUtils from './hashUtils';
import * as utils from './utils';
import * as c from './constants';
import * as FaceUtils from './faceUtils';

import Pixel, { CirclePixel, OutlineCirclePixel, StrokeWeightPixel, WeightCirclePixel } from './pixel';
import { SquigglePixel, CrossedSquigglePixel, EtchedPixel, EtchWeightPixel } from './pixels/squigglePixels';
import OutlinePixel from './pixels/outlinePixel';

let face;

function setFeature(k, v) {
  features[k] = v;
}

class Face {
  constructor() {
    const u = new HashUtils();
    this.u = u;
    this.decPairs = u.decPairs;  
    this.R = new Random(u.seed);
    noiseSeed(u.seed);

    this._flipSkeleton();
    this._setPadding();
    this._setColors();

    this.maxRotation = map(u.percentMap(7), 0, 1, 0, 0.4);
    setFeature('maxRotation', this.maxRotation);

    this.maxSquiggle = map(u.percentMap(20), 0, 1, 0.1, 0.5);
    setFeature('maxSquiggle', this.maxSquiggle);

    this.drawMethod = u.getFromArray(9, c.METHODS);
    setFeature('drawMethod', this.drawMethod);

    this.jumbled = u.whatAreTheOdds(18, 0.5);    
    this.isDrunk = u.whatAreTheOdds(19, 0.5);

    this._setSubsquares();
    this._setLineWeight();
    this._setDirectionalNoise();

    this.alphaNoise = u.whatAreTheOdds(15, 0.4);
    this.stars = u.whatAreTheOdds(17, 0.3) ? (u.percentMap(18) * u.percentMap(18)) : (false);
  }

  _setSubsquares() {
    this.squaresPerSquare = this.u.getFromArray(12, [1, 2, 3, 4, 5]);
    let minEtches = 5;
    let maxEtches = 8;
    let minSubsegments = 3;
    let maxSubsegments = 15;
    let maxScramble = 1.5;
    if(this.drawMethod == ETCHED || this.drawMethod == ETCHED_HORIZONTAL || this.drawMethod == ETCHED_VERTICAL) {
      this.squaresPerSquare = this.u.getFromArray(12, [1, 2]);;
      if (this.squaresPerSquare == 2) {
        minEtches = 2;
        maxEtches = 5;
      }
      maxSubsegments = 10;
    }

    if (this.squaresPerSquare > 2) {
      maxSubsegments = 7;      
    } else {
      maxScramble = 0.2;
    }

    this.subsegments = Math.floor(map(this.decPairs[4], 0, 255, minSubsegments, maxSubsegments)); // 4 = how wiggly are the lines
    this.squareSize = this.baseSquareSize / this.squaresPerSquare;
    this.etchesPerBox = map(this.decPairs[10], 0, 255, minEtches, maxEtches);

    this.scrambleFactor = map(this.decPairs[16], 0, 255, 0, maxScramble);

    setFeature('etches per box', this.etchesPerBox);
    setFeature('subsegments', this.subsegments);
  }

  _setDirectionalNoise() {
    this.multiNoise = false;
    this.twoDirectionNoise = false;
    if (this.squaresPerSquare > 1) {
      this.multiNoise = this.u.whatAreTheOdds(13, 0.5);
      this.twoDirectionNoise = this.u.whatAreTheOdds(14, 0.5); // this won't matter if the above is false
    }
  }

  _setLineWeight() {
    let weight = this.u.getFromArray(6, [1, 2, 2, 3]);
    if(this.drawMethod == SQUIGGLES_ONLY || this.drawMethod == DRUNK_SQUIGGLES) {
      if (this.squaresPerSquare == 1) {
        weight += 1;
      }
    }

    if(this.squaresPerSquare > 2 && weight > 1) {
      weight -= 1;
    } 

    this.standardWeight = utils.relSize(weight);
    strokeWeight(this.standardWeight); 
    setFeature('stroke weight', weight);   
  }

  _setColors() {
    this.colors = utils.coolorToHex(this.u.getFromArray(1, c.colorOptions)); // 1 = colors
    setFeature('first color', this.colors[0].toString('#rrggbb'));
    this.background = this.u.whatAreTheOdds(3, 0.5) ? '#0f0f0f' : '#222222'; // 3 = background
  }

  _setPadding() {
    const padding = map(this.decPairs[0], 0, 255, 0, 20); // 0 = padding
    setFeature('padding', padding);
    this.padding = utils.relSize(padding)

    const totalHeight = height - (2*this.padding);
    this.totalWidth = width - (2*this.padding);
    this.baseSquareSize = totalHeight / this.skeleton.length;

    let paddingMod = this.u.getFromArray(2, [20, -2, 2, 2, 10]);    
    setFeature('paddingMod', paddingMod);    // 2 = the padding of the squares
    this.paddingMod = utils.relSize(paddingMod);
    this.calcOffsets();
  }

  _flipSkeleton() {
    this.flipped = this.u.whatAreTheOdds(8, 0.5);
    setFeature('flipped', this.flipped);

    this.skeleton = c.faceSkeleton;
    if (this.flipped) {
      for (let r = 0; r < this.skeleton.length; r++) {
        this.skeleton[r].reverse();        
      }
    }
  }
  
  calcOffsets() {
    let h = 0;
    let w = 0;
    const squaresTall = this.skeleton.length;
    const squaresWide = this.skeleton[0].length;
    for (let i = 0; i < squaresWide; i++) {
      w += FaceUtils.getColumnMod(i) * this.baseSquareSize;
    }
    for (let i = 0; i < squaresTall; i++) {
      h += FaceUtils.getRowMod(i) * this.baseSquareSize;
    }

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

  getElement(x, y, row) {
    let indexx = this.getNoised(x, row, y/2);
    let indexy = this.getNoised(y, this.skeleton, 10 + x, this.twoDirectionNoise);
    let element = this.skeleton[indexy][indexx];
    if(element == 0 && this.stars && this.R.whatAreTheOdds(this.stars)) {
      element = this.R.random_int(1, 5);
    }
    return element;
  }

  draw() {
    translate(this.offsetX, this.offsetY);
    background(this.background);
    push();
    for (let y = 0; y < this.skeleton.length; y += (1 / this.squaresPerSquare)) {
      let row = this.skeleton[Math.floor(y)];
      const rowModifier = FaceUtils.getRowMod(y);
      let amountShifted = 0;

      for (let x = 0; x < row.length; x += (1 / this.squaresPerSquare)) {
        const element = this.getElement(x, y, row);
        const colModifier = FaceUtils.getColumnMod(x);
        const squareWidth = colModifier * this.squareSize;
        amountShifted += squareWidth;

        switch (this.drawMethod) {
          case SQUARES:
            new Pixel(element, colModifier, rowModifier, face);
            break;
          case SQUIGGLES_ONLY:
            new SquigglePixel(element, colModifier, rowModifier, face);
            break;
          case SQUIGGLE_CROSSED:
            new CrossedSquigglePixel(element, colModifier, rowModifier, face);
            break;
          case CIRCLES_OUTLINE:
            new OutlineCirclePixel(element, colModifier, rowModifier, face);
            break;
          case SQUARES_OUTLINE:
            new OutlinePixel(element, colModifier, rowModifier, face);
            break;
          case SQUARES_AND_SQUIGGLES:
            new Pixel(element, colModifier, rowModifier, face);
            new SquigglePixel(element, colModifier, rowModifier, face);
            break;
          case ETCHED_HORIZONTAL:
            new EtchedPixel(element, colModifier, rowModifier, face);
            break;  
          case CIRCLES_LOL:
            new CirclePixel(element, colModifier, rowModifier, face);
            break;
          case STROKE_WEIGHT_PIXEL:
            new StrokeWeightPixel(element, colModifier, rowModifier, face);
            break;
          case CIRCLE_WEIGHT_PIXEL:
            new WeightCirclePixel(element, colModifier, rowModifier, face);
            break;
          case ETCH_WEIGHT_PIXEL:
            new EtchWeightPixel(element, colModifier, rowModifier, face);
            break;
  
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