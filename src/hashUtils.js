class HashUtils {

  constructor() {
    let hashPairs = [];
    for (let j = 0; j < 32; j++) {
      hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
    }
    // Parse the hash pairs into ints. Hash pairs are base 16 so "ec" becomes 236.
    // Each pair will become a value ranging from 0 - 255
    this.decPairs = hashPairs.map(x => {
      return parseInt(x, 16);
    });
    this.seed = parseInt(tokenData.hash.slice(0, 16), 16);
  }

  getFromArray(i, array) {
    let index = map(this.decPairs[i], 0, 255, 0, array.length);
    if (index >= array.length) {
      index = array.length - 1;
    }
    return array[Math.floor(index)];
  }

  percentMap(i) {
    return map(this.decPairs[i], 0, 255, 0, 1);
  }

  whatAreTheOdds(i, threshold) {
    return this.percentMap(i) < threshold;
  }
  percentMapNormalized(i) {
    return (this.percentMap(i) + this.percentMap(i + 1)) / 2;
  }
}

export default HashUtils;