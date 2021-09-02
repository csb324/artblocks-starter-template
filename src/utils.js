
// this is a good way to get a relative size for something / keep it responsive
export function relSize(pixelsIsh) { // this assumes square. sorry.
  return width * (pixelsIsh / 1000);
}

// this is just a color util
export function coolorToHex(string) {
  return string.split("-").map((el) => {
    return color("#" + el);
  });
}
