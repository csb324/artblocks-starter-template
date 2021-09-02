
class Face {
  constructor(decPairs, seed) {    
    this.width = map(decPairs[0], 0, 255, relSize(250), relSize(900));
    this.height = map(decPairs[1], 0, 255, relSize(500), relSize(900));

    this.foreheadWidth = map(decPairs[2], 0, 255, 0.2, 0.8) * this.width;
    this.chinWidth = map(decPairs[3], 0, 255, 0.2, 0.6) * this.width;

    this.eyeHeight = map(decPairs[5], 0, 255, 0.2, 0.5) * this.height;
    this.socketHeight = map(decPairs[6], 0, 255, 0.2, 0.8) * (this.height - this.eyeHeight);

    this.mouthPos = map(decPairs[6], 0, 255, 0.2, 0.7) * (this.height - (this.socketHeight + this.eyeHeight));

    this.R = new Random(seed);
    this.setUpPoints();
  }

  setUpPoints() {
    this.xStart = (width - this.width) / 2;
    this.yStart = (height - this.height) / 2;    
    this.xEnd = this.xStart + this.width;
    this.yEnd = this.yStart + this.height;

    this.foreheadXStart = (width - this.foreheadWidth) / 2;
    this.foreheadXEnd = this.foreheadXStart + this.foreheadWidth;

    this.chinXStart = (width - this.chinWidth) / 2;
    this.chinXEnd = this.chinXStart + this.chinWidth;

    this.foreheadYEnd = this.yStart + this.eyeHeight;
    this.eyesYEnd = this.foreheadYEnd + this.socketHeight;

    this.mouthY = this.eyesYEnd + this.mouthPos;

    // console.log(this);
  }

  drawHeadShape() {
    const headPoints = [
      {x: this.foreheadXStart, y: this.yStart},
      {x: this.foreheadXEnd, y: this.yStart},
      {x: this.xEnd, y: this.foreheadYEnd},
      {x: this.xEnd, y: this.eyesYEnd},

      {x: this.chinXEnd, y: this.yEnd - this.R.random_int(0, relSize(10))},
      {x: this.chinXStart, y: this.yEnd},

      {x: this.xStart, y: this.eyesYEnd},
      {x: this.xStart, y: this.foreheadYEnd}
    ];
    
    this.drawPolygon(headPoints);
  }

  drawFeatures() {
    const mouthHeight = relSize(30); // could be var
    const mouthPoints = [
      {x: this.chinXStart, y: this.mouthY},
      {x: this.chinXEnd, y: this.mouthY},
      {x: this.chinXEnd - mouthHeight, y:this.mouthY - mouthHeight},
      {x: this.chinXStart + mouthHeight, y:this.mouthY - mouthHeight},      
    ]

    this.fillPolygon(mouthPoints, 'gray');
    this.drawPolygon(mouthPoints);

    const noseWidth = relSize(60); // could be var
    const eyebrows = [
      [
        {x: this.foreheadXStart, y: this.foreheadYEnd},
        {x: width/2 - (noseWidth/2), y: this.foreheadYEnd}
      ],
      [
        {x: this.foreheadXEnd, y: this.foreheadYEnd},
        {x: width/2 + (noseWidth/2), y: this.foreheadYEnd}

      ]
    ]

    eyebrows.forEach((eyebrow) => {this.drawPolygon(eyebrow)});
    
  }

  fillPolygon(points, color = 'white') {    
    fill(color);
    beginShape();

    for (let index = 0; index < points.length; index++) {
      const element = points[index];
      vertex(element['x'], element['y']);
    }

    endShape(CLOSE);
  }

  drawPolygon(points) {
    for (let index = 0; index < points.length; index++) {
      const element = points[index];
      let nextElement = points[index+1];

      if(!nextElement) {
        nextElement = points[0];
      }

      this.drawSquiggle(
        element["x"], element["y"], nextElement["x"], nextElement["y"]
      );

    }
  }

  draw() {
    this.drawHeadShape();
    this.drawFeatures();
  }

  drawSquiggle(x1, y1, x2, y2) {
    const subsegments = dist(x1, y1, x2, y2) / 3;

    this._drawSquiggleOneDirection(x1, y1, x2, y2, subsegments);
    this._drawSquiggleOneDirection(x2, y2, x1, y1, subsegments);
    this._drawSquiggleOneDirection(x1, y1, x2, y2, subsegments);
    this._drawSquiggleOneDirection(x2, y2, x1, y1, subsegments);
  }


  _drawSquiggleOneDirection(x1, y1, x2, y2, subsegments) {
    push();

    translate(x1, y1);

    let dX = x2 - x1;
    let dY = y2 - y1;

    stroke(color('black'));

    let totalRotation = 0;
    const maxRotation = percentMap(7)/4 + 0.25;

    for (let index = 0; index < subsegments; index++) {
      const thisMinR = -maxRotation - totalRotation;
      const thisMaxR = maxRotation - totalRotation;
      let rotation = map(this.R.random_dec(), 0, 1, thisMinR, thisMaxR);

      // console.log("amount rotated ever: " + totalRotation);

      // console.log("minimum to rotate this year: " + (thisMinR));
      // console.log("maximum to rotate this year: " + (thisMaxR));

      totalRotation += rotation;
      translate(dX/subsegments, dY/subsegments);

      rotate(rotation);
      line(0, 0, dX/subsegments, dY/subsegments);
    }

    pop();
  }
}
