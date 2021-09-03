const minSkew = 0.5;
const maxSkew = 1.2;
const noiseMod = 0.5;

export function getColumnMod(i) {
  return map(noise(i*noiseMod, 2), 0, 1, minSkew, maxSkew);
}
export function getRowMod(i) {
  return map(noise(i*noiseMod, 1), 0, 1, minSkew, maxSkew);
}

// export function jumble(colModifier, rowModifier, face) {
//   const r = face.R;
//   const squareSize = face.squareSize;
//   const scrambleFactor = face.scrambleFactor;

//   translate(
//     r.random_num(-scrambleFactor, scrambleFactor) * colModifier * squareSize, 
//     r.random_num(-scrambleFactor, scrambleFactor) * rowModifier * squareSize
//   )
// }

  // // UNUSUED
  // setBlendMode() {
  //   this.blendMode = u.whatAreTheOdds(11, 0.1) ? OVERLAY : BLEND;
  //   if (this.blendMode == OVERLAY) {
  //     this.background = u.whatAreTheOdds(3, 0.5) ? '#444444' : '#666666';
  //   }

  //   blendMode(this.blendMode);
  //   setFeature('blendMode', this.blendMode);
  // }
  // // UNUSED
  // setBackgroundBlocks() {
  //   this.drawBackgroundBlocks = u.whatAreTheOdds(5, 0.2);
  // }