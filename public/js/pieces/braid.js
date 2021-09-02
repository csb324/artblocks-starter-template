// random!

class Random {
  constructor(seed) {
    this.seed = seed
  }
  random_dec() {
    /* Algorithm "xor" from p. 4 of Marsaglia, "Xorshift RNGs" */
    this.seed ^= this.seed << 13
    this.seed ^= this.seed >> 17
    this.seed ^= this.seed << 5
    return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000
  }
  random_num(a, b) {
    return a+(b-a)*this.random_dec()
  }
  random_int(a, b) {
    return Math.floor(this.random_num(a, b+1))
  }
  random_from_array(arr) {
    let i = this.random_int(0, arr.length - 1);
    console.log(i);
    console.log(arr[i]);
    return arr[i];
  }
}

function relSize(pixelsIsh) { // this assumes square. sorry.
  return width * (pixelsIsh / 1000);
}

// Turn the hash into hash pairs.

// This means 0xeca4cf6288eb455f388301c28ac01a8da5746781d22101a65cb78a96a49512c8
// turns into ["ec", "a4", "cf", "62", "88", "eb", ...]
let hashPairs = [];
let decPairs, seed, lineThickness, colors;
let R;

function createVars() {
  hashPairs = [];
  colors = [];

  for (let j = 0; j < 32; j++) {
    hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
  }
  // Parse the hash pairs into ints. Hash pairs are base 16 so "ec" becomes 236.
  // Each pair will become a value ranging from 0 - 255
  decPairs = hashPairs.map(x => {
    return parseInt(x, 16);
  });

  seed = parseInt(tokenData.hash.slice(0, 16), 16);
  R = new Random(seed);

  // Grab the first hash pair int to use as a line thickness value.
  lineThickness = decPairs[1];

  // Grab three different different hash pair ints to use as RGB values.
  colors.push(color(decPairs[25], decPairs[26], decPairs[27]));
  colors.push(color(decPairs[28], decPairs[29], decPairs[30]));
}


// Grab the first 16 values of the hash to use as a noise seed.

// const numCircles = 50;

let padding, gridArea, canvas;

function setup() {
  createVars()
  // Grab the smaller of the window sizes and use that as the canvas size.
  const smallerDimension = (windowWidth < windowHeight ? windowWidth : windowHeight) - 80;
  canvas = createCanvas(smallerDimension, smallerDimension);
  // Create the variable values.
  padding = width/25;
  // Define the grid area as the width of the canvas minus the padding.
  gridArea = width - padding;

  // Move to the center of the canvas and draw a square that encompasses the canvas.
  push();
  translate(width/2, width/2);
  rectMode(CENTER)
  square(0,0,width - padding/2);
  pop();

  render();
}

function render() {

  background(255);
  // See the noise value.
  noiseSeed(seed);
  // Account for the padding and define the size of each cell in the grid.
  // translate(padding/2, padding/2);
  translate(width/2, width/2);

  strokeWeight(map(decPairs[24], 0, 255, 1, 3));

  push();


  let rotationAmount = map(decPairs[25], 0, 255, PI/100, PI/10);
  let increment = 0;
  
  const incrementAmount = map(decPairs[27], 0, 255, 0, 0.4);
  // const incrementAmount = map(decPairs[27], 0, 255, 0, 0.01);

  const numLoops = map(decPairs[26], 0, 255, 1.5, 3);
  const segmentsToCircle = (2*PI / rotationAmount);
  const numSegments = (2*PI / rotationAmount) * numLoops;

  let maxDistance = 0;
  let lengths = [];

  // decPairs.forEach((hp, index) => {
  for(let _x = 0; _x < numSegments; _x++) {
    let segLength = map(noise(increment), 0, 1, 0, relSize(20));
    lengths.push( segLength );
    translate(segLength, 0);
    maxDistance = Math.max(maxDistance, Math.abs(width/2 - canvas.drawingContext.getTransform()['e'])/2);
    
    rotate(rotationAmount);    
    increment += incrementAmount;

  }

  pop();

  push();

  noFill();
  console.log(maxDistance);
  for(let l = 0; l < lengths.length; l++) {
    if(l % Math.floor(segmentsToCircle/2) == 0) {
      strokeWeight(10);
    } else {
      strokeWeight(map(decPairs[24], 0, 255, 1, 3));
    }
    
    line(0, 0, lengths[l], 0);
    translate(lengths[l], 0);
    rotate(rotationAmount);    
    increment += incrementAmount;
  }

  ellipse(0, 0, maxDistance, maxDistance);

  pop();

  push();
  noFill();
  stroke(colors[1]);
  translate(width/2 - (maxDistance),0);
  ellipse(0, 0, maxDistance, maxDistance);

  // for(let l = 0; l < lengths.length; l++) {
  //   line(0, 0, lengths[l], 0);
  //   translate(lengths[l], 0);
  //   rotate(rotationAmount);    
  //   increment += incrementAmount;
  // }

  pop();


  // ellipse(maxDistance / 2, maxDistance / 2, maxDistance, maxDistance);


}

function draw() {
}
