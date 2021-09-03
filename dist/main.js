/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"METHODS\": () => (/* binding */ METHODS),\n/* harmony export */   \"faceSkeleton\": () => (/* binding */ faceSkeleton),\n/* harmony export */   \"colorOptions\": () => (/* binding */ colorOptions)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nglobalThis.SQUARES_AND_SQUIGGLES = 'square and squiggle';\nglobalThis.SQUARES = 'square';\nglobalThis.SQUIGGLES_ONLY = 'squiggle';\nglobalThis.SQUIGGLE_CROSSED = 'squiggle crossed';\nglobalThis.ETCHED_HORIZONTAL = 'etched - horizontal';\nglobalThis.ETCHED_VERTICAL = 'etched - vertical';\nglobalThis.ETCHED = 'etched - both';\nglobalThis.DRUNK_SQUARES = 'squares: drunk';\nglobalThis.DRUNK_SQUIGGLES = 'squiggles: drunk';\nglobalThis.CIRCLES_LOL = 'circles';\nglobalThis.SQUARES_JUMBLED = 'jumbly boys';\nglobalThis.SQUIGGLES_JUMBLED = 'SQUIGGLE JUMBLES, boys!!!';\n\nglobalThis.SQUARES_OUTLINE = 'square outline';\nglobalThis.CIRCLES_OUTLINE = 'circle outline';\nglobalThis.STROKE_WEIGHT_PIXEL = 'stroke weight';\nglobalThis.CIRCLE_WEIGHT_PIXEL = 'circle - by weight';\nglobalThis.ETCH_WEIGHT_PIXEL = 'etch - by weight';\n\nconst METHODS = [\n  SQUARES,\n  CIRCLES_LOL,\n  SQUIGGLES_ONLY,\n  SQUIGGLE_CROSSED,\n  SQUARES_OUTLINE,\n  CIRCLES_OUTLINE,\n  SQUARES_AND_SQUIGGLES,\n  ETCHED_HORIZONTAL,\n  STROKE_WEIGHT_PIXEL,\n  CIRCLE_WEIGHT_PIXEL,\n  ETCH_WEIGHT_PIXEL\n\n  // SQUARES_AND_SQUIGGLES, \n  // , \n  // ETCHED_HORIZONTAL,\n  // ETCHED,\n  // DRUNK_SQUARES,\n\n  // SQUARES_AND_SQUIGGLES, \n  // SQUARES, \n  // SQUIGGLE_CROSSED, \n  // ETCHED_HORIZONTAL,\n  // // ETCHED_VERTICAL,\n  // ETCHED,\n  // DRUNK_SQUARES,\n  // // copy so that squiggles-only are more rare\n  // SQUIGGLES_ONLY, \n  // DRUNK_SQUIGGLES,\n\n  // SQUARES_JUMBLED,\n  // SQUIGGLES_JUMBLED,\n  // SQUIGGLES_ONLY\n];\n\nconst faceSkeleton_DEBUG = [\n  [0, 2, 0],\n  [1, 5, 3],\n  [0, 4, 0]\n];\n\nconst faceSkeleton_REAL = [\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 4, 2, 1, 1, 1, 2, 2, 4, 0, 0, 0, 0],\n  [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 3, 0, 0, 0, 0],\n  [0, 0, 0, 0, 3, 5, 5, 1, 3, 5, 5, 4, 0, 0, 0, 0],\n  [0, 0, 0, 0, 2, 4, 3, 1, 5, 4, 4, 3, 0, 0, 0, 0],\n  [0, 0, 0, 0, 2, 1, 2, 1, 5, 3, 3, 3, 0, 0, 0, 0],\n  [0, 0, 0, 0, 2, 1, 2, 4, 4, 3, 3, 4, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 3, 4, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 3, 2, 5, 5, 2, 4, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 3, 2, 2, 3, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n]\n\nconst faceSkeleton = faceSkeleton_REAL;\n\nconst colorOptions = [\n  'f9b4ed-e574bc-c52184-334139-1e2d24', // pink\n  'e4cbc9-8fc0a9-70877f-684551-402e2a', // sorta neutral mint\n  'efd3d7-bdb59e-c99418-bf0603-533b4d', // maryland\n  'e0dbcc-a3b4a2-2893cc-187795-315c5e', // true north\n  'f2edeb-ff99b9-3d7ab8-724672-4b303d', // trans pride\n  'acfcd9-7cdfcd-ab92bf-4a6c6f-231f20', // jazzy cup\n  'f0f3bd-02c39a-028090-05668d-121420', // ocean\n  'dfbe99-b5bd89-ec9192-db5375-95190c', // garden pastels\n  'd8dcff-c38d94-a76571-565676-403B3B', // clay, sorta\n  'ebf5df-d4d4aa-edb458-e8871e-3c1518', // pumpkin\n  'd9f0ff-a3d5ff-83c9f4-6f73d2-474973', // another ice friend\n  'ebf8dd-99d6b6-5c9999-4d5359-4a4238', // seafoam\n  'e8d7f1-d3bccc-a167a5-4a306d-0e273c', // night mode\n  'f8f2dc-aac7da-dea47e-cd4631-653f29', // vaguely patriotic idk\n];\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/constants.js?");

/***/ }),

/***/ "./src/face.js":
/*!*********************!*\
  !*** ./src/face.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ \"./src/random.js\");\n/* harmony import */ var _hashUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hashUtils */ \"./src/hashUtils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _faceUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faceUtils */ \"./src/faceUtils.js\");\n/* harmony import */ var _pixel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pixel */ \"./src/pixel.js\");\n/* harmony import */ var _pixels_squigglePixels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pixels/squigglePixels */ \"./src/pixels/squigglePixels.js\");\n/* harmony import */ var _pixels_outlinePixel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pixels/outlinePixel */ \"./src/pixels/outlinePixel.js\");\n// Turn the hash into hash pairs.\n// This means 0xeca4cf6288eb455f388301c28ac01a8da5746781d22101a65cb78a96a49512c8\n// turns into [\"ec\", \"a4\", \"cf\", \"62\", \"88\", \"eb\", ...]\n\n\n\n\n\n\n\n\n\n\n\nlet face;\n\nfunction setFeature(k, v) {\n  features[k] = v;\n}\n\nclass Face {\n  constructor() {\n    const u = new _hashUtils__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.u = u;\n    this.decPairs = u.decPairs;  \n    this.R = new _random__WEBPACK_IMPORTED_MODULE_0__[\"default\"](u.seed);\n    noiseSeed(u.seed);\n\n    this._flipSkeleton();\n    this._setPadding();\n    this._setColors();\n\n    this.maxRotation = map(u.percentMap(7), 0, 1, 0, 0.4);\n    setFeature('maxRotation', this.maxRotation);\n\n    this.maxSquiggle = map(u.percentMap(20), 0, 1, 0.1, 0.5);\n    setFeature('maxSquiggle', this.maxSquiggle);\n\n    this.drawMethod = u.getFromArray(9, _constants__WEBPACK_IMPORTED_MODULE_3__.METHODS);\n    setFeature('drawMethod', this.drawMethod);\n\n    this.jumbled = u.whatAreTheOdds(18, 0.5);    \n    this.isDrunk = u.whatAreTheOdds(19, 0.5);\n\n    this._setSubsquares();\n    this._setLineWeight();\n    this._setDirectionalNoise();\n\n    this.alphaNoise = u.whatAreTheOdds(15, 0.4);\n    this.stars = u.whatAreTheOdds(17, 0.3) ? (u.percentMap(18) * u.percentMap(18)) : (false);\n  }\n\n  _setSubsquares() {\n    this.squaresPerSquare = this.u.getFromArray(12, [1, 2, 3, 4, 5]);\n    let minEtches = 5;\n    let maxEtches = 8;\n    let minSubsegments = 3;\n    let maxSubsegments = 15;\n    let maxScramble = 1.5;\n    if(this.drawMethod == ETCHED || this.drawMethod == ETCHED_HORIZONTAL || this.drawMethod == ETCHED_VERTICAL) {\n      this.squaresPerSquare = this.u.getFromArray(12, [1, 2]);;\n      if (this.squaresPerSquare == 2) {\n        minEtches = 2;\n        maxEtches = 5;\n      }\n      maxSubsegments = 10;\n    }\n\n    if (this.squaresPerSquare > 2) {\n      maxSubsegments = 7;      \n    } else {\n      maxScramble = 0.2;\n    }\n\n    this.subsegments = Math.floor(map(this.decPairs[4], 0, 255, minSubsegments, maxSubsegments)); // 4 = how wiggly are the lines\n    this.squareSize = this.baseSquareSize / this.squaresPerSquare;\n    this.etchesPerBox = map(this.decPairs[10], 0, 255, minEtches, maxEtches);\n\n    this.scrambleFactor = map(this.decPairs[16], 0, 255, 0, maxScramble);\n\n    setFeature('etches per box', this.etchesPerBox);\n    setFeature('subsegments', this.subsegments);\n  }\n\n  _setDirectionalNoise() {\n    this.multiNoise = false;\n    this.twoDirectionNoise = false;\n    if (this.squaresPerSquare > 1) {\n      this.multiNoise = this.u.whatAreTheOdds(13, 0.5);\n      this.twoDirectionNoise = this.u.whatAreTheOdds(14, 0.5); // this won't matter if the above is false\n    }\n  }\n\n  _setLineWeight() {\n    let weight = this.u.getFromArray(6, [1, 2, 2, 3]);\n    if(this.drawMethod == SQUIGGLES_ONLY || this.drawMethod == DRUNK_SQUIGGLES) {\n      if (this.squaresPerSquare == 1) {\n        weight += 1;\n      }\n    }\n\n    if(this.squaresPerSquare > 2 && weight > 1) {\n      weight -= 1;\n    } \n\n    this.standardWeight = _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(weight);\n    strokeWeight(this.standardWeight); \n    setFeature('stroke weight', weight);   \n  }\n\n  _setColors() {\n    this.colors = _utils__WEBPACK_IMPORTED_MODULE_2__.coolorToHex(this.u.getFromArray(1, _constants__WEBPACK_IMPORTED_MODULE_3__.colorOptions)); // 1 = colors\n    setFeature('first color', this.colors[0].toString('#rrggbb'));\n    this.background = this.u.whatAreTheOdds(3, 0.5) ? '#0f0f0f' : '#222222'; // 3 = background\n  }\n\n  _setPadding() {\n    const padding = map(this.decPairs[0], 0, 255, 0, 20); // 0 = padding\n    setFeature('padding', padding);\n    this.padding = _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(padding)\n\n    const totalHeight = height - (2*this.padding);\n    this.totalWidth = width - (2*this.padding);\n    this.baseSquareSize = totalHeight / this.skeleton.length;\n\n    let paddingMod = this.u.getFromArray(2, [20, -2, 2, 2, 10]);    \n    setFeature('paddingMod', paddingMod);    // 2 = the padding of the squares\n    this.paddingMod = _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(paddingMod);\n    this.calcOffsets();\n  }\n\n  _flipSkeleton() {\n    this.flipped = this.u.whatAreTheOdds(8, 0.5);\n    setFeature('flipped', this.flipped);\n\n    this.skeleton = _constants__WEBPACK_IMPORTED_MODULE_3__.faceSkeleton;\n    if (this.flipped) {\n      for (let r = 0; r < this.skeleton.length; r++) {\n        this.skeleton[r].reverse();        \n      }\n    }\n  }\n  \n  calcOffsets() {\n    let h = 0;\n    let w = 0;\n    const squaresTall = this.skeleton.length;\n    const squaresWide = this.skeleton[0].length;\n    for (let i = 0; i < squaresWide; i++) {\n      w += _faceUtils__WEBPACK_IMPORTED_MODULE_4__.getColumnMod(i) * this.baseSquareSize;\n    }\n    for (let i = 0; i < squaresTall; i++) {\n      h += _faceUtils__WEBPACK_IMPORTED_MODULE_4__.getRowMod(i) * this.baseSquareSize;\n    }\n\n    this.offsetX = (width - w)/2;\n    setFeature('offsetX', this.offsetX);\n\n    this.offsetY = (height - h)/2;\n    setFeature('offsetY', this.offsetY);\n  }\n\n  getNoised(x, array, factor, thisDirection = true) {\n    const noiseF = this.scrambleFactor;\n    let indexx = x;\n    if(this.multiNoise && thisDirection) {\n      indexx = (noise(x, factor) - 0.5)*noiseF + x;\n      indexx = constrain(indexx, 0, array.length - 0.0001)\n    }\n    indexx = Math.floor(indexx);\n    return indexx;\n  }\n\n  getElement(x, y, row) {\n    let indexx = this.getNoised(x, row, y/2);\n    let indexy = this.getNoised(y, this.skeleton, 10 + x, this.twoDirectionNoise);\n    let element = this.skeleton[indexy][indexx];\n    if(element == 0 && this.stars && this.R.whatAreTheOdds(this.stars)) {\n      element = this.R.random_int(1, 5);\n    }\n    return element;\n  }\n\n  draw() {\n    translate(this.offsetX, this.offsetY);\n    background(this.background);\n    push();\n    for (let y = 0; y < this.skeleton.length; y += (1 / this.squaresPerSquare)) {\n      let row = this.skeleton[Math.floor(y)];\n      const rowModifier = _faceUtils__WEBPACK_IMPORTED_MODULE_4__.getRowMod(y);\n      let amountShifted = 0;\n\n      for (let x = 0; x < row.length; x += (1 / this.squaresPerSquare)) {\n        const element = this.getElement(x, y, row);\n        const colModifier = _faceUtils__WEBPACK_IMPORTED_MODULE_4__.getColumnMod(x);\n        const squareWidth = colModifier * this.squareSize;\n        amountShifted += squareWidth;\n\n        switch (this.drawMethod) {\n          case SQUARES:\n            new _pixel__WEBPACK_IMPORTED_MODULE_5__[\"default\"](element, colModifier, rowModifier, face);\n            break;\n          case SQUIGGLES_ONLY:\n            new _pixels_squigglePixels__WEBPACK_IMPORTED_MODULE_6__.SquigglePixel(element, colModifier, rowModifier, face);\n            break;\n          case SQUIGGLE_CROSSED:\n            new _pixels_squigglePixels__WEBPACK_IMPORTED_MODULE_6__.CrossedSquigglePixel(element, colModifier, rowModifier, face);\n            break;\n          case CIRCLES_OUTLINE:\n            new _pixel__WEBPACK_IMPORTED_MODULE_5__.OutlineCirclePixel(element, colModifier, rowModifier, face);\n            break;\n          case SQUARES_OUTLINE:\n            new _pixels_outlinePixel__WEBPACK_IMPORTED_MODULE_7__[\"default\"](element, colModifier, rowModifier, face);\n            break;\n          case SQUARES_AND_SQUIGGLES:\n            new _pixel__WEBPACK_IMPORTED_MODULE_5__[\"default\"](element, colModifier, rowModifier, face);\n            new _pixels_squigglePixels__WEBPACK_IMPORTED_MODULE_6__.SquigglePixel(element, colModifier, rowModifier, face);\n            break;\n          case ETCHED_HORIZONTAL:\n            new _pixels_squigglePixels__WEBPACK_IMPORTED_MODULE_6__.EtchedPixel(element, colModifier, rowModifier, face);\n            break;  \n          case CIRCLES_LOL:\n            new _pixel__WEBPACK_IMPORTED_MODULE_5__.CirclePixel(element, colModifier, rowModifier, face);\n            break;\n          case STROKE_WEIGHT_PIXEL:\n            new _pixel__WEBPACK_IMPORTED_MODULE_5__.StrokeWeightPixel(element, colModifier, rowModifier, face);\n            break;\n          case CIRCLE_WEIGHT_PIXEL:\n            new _pixel__WEBPACK_IMPORTED_MODULE_5__.WeightCirclePixel(element, colModifier, rowModifier, face);\n            break;\n          case ETCH_WEIGHT_PIXEL:\n            new _pixels_squigglePixels__WEBPACK_IMPORTED_MODULE_6__.EtchWeightPixel(element, colModifier, rowModifier, face);\n            break;\n  \n          default:\n            console.log(\"oh no!\");\n            break;\n        }\n\n        translate(squareWidth, 0);\n      }\n      translate(-amountShifted, this.squareSize * rowModifier);\n      amountShifted = 0;\n    }\n    pop();\n  }\n}\n\n\n\nlet canvas;\nfunction setup() {\n  // Grab the smaller of the window sizes and use that as the canvas size.\n  const smallerDimension = windowWidth < windowHeight ? windowWidth : windowHeight;\n  canvas = createCanvas(smallerDimension, smallerDimension);\n  canvas.parent(\"canvasParent\");\n  face = new Face();\n  render();  \n}\n\nfunction render() {\n  face.draw();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setup);\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/face.js?");

/***/ }),

/***/ "./src/faceUtils.js":
/*!**************************!*\
  !*** ./src/faceUtils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getColumnMod\": () => (/* binding */ getColumnMod),\n/* harmony export */   \"getRowMod\": () => (/* binding */ getRowMod)\n/* harmony export */ });\nconst minSkew = 0.5;\nconst maxSkew = 1.2;\nconst noiseMod = 0.5;\n\nfunction getColumnMod(i) {\n  return map(noise(i*noiseMod, 2), 0, 1, minSkew, maxSkew);\n}\nfunction getRowMod(i) {\n  return map(noise(i*noiseMod, 1), 0, 1, minSkew, maxSkew);\n}\n\n// export function jumble(colModifier, rowModifier, face) {\n//   const r = face.R;\n//   const squareSize = face.squareSize;\n//   const scrambleFactor = face.scrambleFactor;\n\n//   translate(\n//     r.random_num(-scrambleFactor, scrambleFactor) * colModifier * squareSize, \n//     r.random_num(-scrambleFactor, scrambleFactor) * rowModifier * squareSize\n//   )\n// }\n\n  // // UNUSUED\n  // setBlendMode() {\n  //   this.blendMode = u.whatAreTheOdds(11, 0.1) ? OVERLAY : BLEND;\n  //   if (this.blendMode == OVERLAY) {\n  //     this.background = u.whatAreTheOdds(3, 0.5) ? '#444444' : '#666666';\n  //   }\n\n  //   blendMode(this.blendMode);\n  //   setFeature('blendMode', this.blendMode);\n  // }\n  // // UNUSED\n  // setBackgroundBlocks() {\n  //   this.drawBackgroundBlocks = u.whatAreTheOdds(5, 0.2);\n  // }\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/faceUtils.js?");

/***/ }),

/***/ "./src/hashUtils.js":
/*!**************************!*\
  !*** ./src/hashUtils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass HashUtils {\n\n  constructor() {\n    let hashPairs = [];\n    for (let j = 0; j < 32; j++) {\n      hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));\n    }\n    // Parse the hash pairs into ints. Hash pairs are base 16 so \"ec\" becomes 236.\n    // Each pair will become a value ranging from 0 - 255\n    this.decPairs = hashPairs.map(x => {\n      return parseInt(x, 16);\n    });\n    this.seed = parseInt(tokenData.hash.slice(0, 16), 16);\n  }\n\n  getFromArray(i, array) {\n    let index = map(this.decPairs[i], 0, 255, 0, array.length);\n    if (index >= array.length) {\n      index = array.length - 1;\n    }\n    return array[Math.floor(index)];\n  }\n\n  percentMap(i) {\n    return map(this.decPairs[i], 0, 255, 0, 1);\n  }\n\n  whatAreTheOdds(i, threshold) {\n    return this.percentMap(i) < threshold;\n  }\n  percentMapNormalized(i) {\n    return (this.percentMap(i) + this.percentMap(i + 1)) / 2;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashUtils);\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/hashUtils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _face__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./face */ \"./src/face.js\");\n\n\nwindow.setup = _face__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/index.js?");

/***/ }),

/***/ "./src/pixel.js":
/*!**********************!*\
  !*** ./src/pixel.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"CirclePixel\": () => (/* binding */ CirclePixel),\n/* harmony export */   \"OutlineCirclePixel\": () => (/* binding */ OutlineCirclePixel),\n/* harmony export */   \"StrokeWeightPixel\": () => (/* binding */ StrokeWeightPixel),\n/* harmony export */   \"WeightCirclePixel\": () => (/* binding */ WeightCirclePixel)\n/* harmony export */ });\n/* harmony import */ var _pixels_basePixel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pixels/basePixel */ \"./src/pixels/basePixel.js\");\n/* harmony import */ var _pixels_outlinePixel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pixels/outlinePixel */ \"./src/pixels/outlinePixel.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_pixels_basePixel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nclass CirclePixel extends _pixels_basePixel__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  draw() {\n    ellipse(\n      this.width()/2,\n      this.height()/2,\n      this.width(), \n      this.height()\n    );\n  }\n}\n\nclass OutlineCirclePixel extends _pixels_outlinePixel__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  draw() {\n    ellipse(\n      this.width()/2,\n      this.height()/2,\n      this.width(),\n      this.height()\n    );\n  }\n}\n\nclass StrokeWeightPixel extends _pixels_basePixel__WEBPACK_IMPORTED_MODULE_0__[\"default\"] { // also used in the etching one\n  setUp() {\n    noFill();\n    const c = this.getAlphaColor();\n    stroke(c);\n    this.adjustWeight();\n    push();\n    this.applyDistortions();\n  }\n}\n\nclass WeightCirclePixel extends StrokeWeightPixel {\n  draw() {\n    ellipse(\n      this.width()/2,\n      this.height()/2,\n      this.width(),\n      this.height()\n    );\n  }\n}\n\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/pixel.js?");

/***/ }),

/***/ "./src/pixels/basePixel.js":
/*!*********************************!*\
  !*** ./src/pixels/basePixel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pixel)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\nclass Pixel {\n  constructor(element, colModifier, rowModifier, face) {\n    this.element = element;\n    this.colModifier = colModifier;\n    this.rowModifier = rowModifier;\n    this.face = face;\n    this.squareSize = face.squareSize;\n    this.paddingMod = face.paddingMod;\n\n    if(this.element == 0) {\n      return;\n    }\n\n    this.setUp();\n    this.draw();\n    this.restore();\n  }\n\n  setUp() {\n    noStroke();\n    const c = this.getAlphaColor();\n    fill(c);\n    push();\n    this.applyDistortions();\n  }\n\n  applyDistortions() {\n    if (this.face.isDrunk) {\n      this.getDrunk();\n    }\n    if (this.face.jumbled) {\n      this.jumble();\n    }\n\n  }\n\n  draw() {\n    rect(\n      0 - this.paddingMod/2, \n      0 - this.paddingMod/2, \n      this.width(), \n      this.height()\n    );\n    // this.drawRect(element, colModifier, rowModifier);\n  }\n\n  restore() {\n    pop();\n  }\n\n  width() {\n    return (this.squareSize * this.colModifier + this.paddingMod);\n  }\n\n  height() {\n    return (this.squareSize * this.rowModifier + this.paddingMod);\n  }\n\n  getDrunk() {\n    translate(this.width()/2, this.height()/2);\n    const rot = this.face.R.random_num(-this.face.maxRotation, this.face.maxRotation);\n    rotate(rot);\n    translate(-this.width()/2, -this.height()/2);\n  }\n\n  getAlphaColor() {\n    let c = this.face.colors[this.element-1];\n    let maxAlpha = 250;\n    if(this.face.alphaNoise) {\n      c.setAlpha(this.face.R.random_num(maxAlpha - 100, maxAlpha))\n    } \n\n    return c;\n  }\n\n  jumble() {\n    const r = this.face.R;\n    const scrambleFactor = this.face.scrambleFactor;\n\n    translate(\n      r.random_num(-scrambleFactor, scrambleFactor) * this.colModifier * this.squareSize, \n      r.random_num(-scrambleFactor, scrambleFactor) * this.rowModifier * this.squareSize\n    )\n  }\n\n  adjustWeight() {\n    const weight = _utils__WEBPACK_IMPORTED_MODULE_0__.relSize(6 - this.element);    \n    strokeWeight(weight);\n  }\n\n}\n\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/pixels/basePixel.js?");

/***/ }),

/***/ "./src/pixels/outlinePixel.js":
/*!************************************!*\
  !*** ./src/pixels/outlinePixel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OutlinePixel)\n/* harmony export */ });\n/* harmony import */ var _basePixel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basePixel */ \"./src/pixels/basePixel.js\");\n\n\nclass OutlinePixel extends _basePixel__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  setUp() {\n    noFill();\n    const c = this.getAlphaColor();\n    stroke(c);\n    push();\n    this.applyDistortions();\n  }\n}\n\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/pixels/outlinePixel.js?");

/***/ }),

/***/ "./src/pixels/squigglePixels.js":
/*!**************************************!*\
  !*** ./src/pixels/squigglePixels.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SquigglePixel\": () => (/* binding */ SquigglePixel),\n/* harmony export */   \"CrossedSquigglePixel\": () => (/* binding */ CrossedSquigglePixel),\n/* harmony export */   \"EtchedPixel\": () => (/* binding */ EtchedPixel),\n/* harmony export */   \"EtchWeightPixel\": () => (/* binding */ EtchWeightPixel)\n/* harmony export */ });\n/* harmony import */ var _outlinePixel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outlinePixel */ \"./src/pixels/outlinePixel.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\nclass SquigglePixel extends _outlinePixel__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  draw() {\n    this.squiggleSquare(\n      0 - this.paddingMod/2, \n      0 - this.paddingMod/2, \n      this.width(), \n      this.height()\n    );\n  }\n\n  squiggleSquare(x, y, width, height) {\n    const x2 = x + width;\n    const y2 = y + height;\n    this.squiggleLine(x, y, x2, y);\n    this.squiggleLine(x, y, x, y2);\n    this.squiggleLine(x2, y2, x2, y);\n    this.squiggleLine(x2, y2, x, y2);\n  }\n\n  squiggleLine(x1, y1, x2, y2) {\n    push();\n    translate(x1, y1);\n    let dX = x2 - x1;\n    let dY = y2 - y1;\n    let totalRotation = 0;\n    for (let index = 0; index < this.face.subsegments; index++) {\n      \n      const thisMinR = -this.face.maxSquiggle - totalRotation;\n      const thisMaxR = this.face.maxSquiggle - totalRotation;\n\n      let rotation = map(this.face.R.random_dec(), 0, 1, thisMinR, thisMaxR);\n\n      totalRotation += rotation;\n      line(0, 0, dX/this.face.subsegments, dY/this.face.subsegments);\n      translate(dX/this.face.subsegments, dY/this.face.subsegments);\n      rotate(rotation);\n    }\n    pop();\n  }\n}\n\nclass CrossedSquigglePixel extends SquigglePixel {\n  draw() {\n    super.draw();\n    \n    const x = 0 - this.paddingMod/2;\n    const y = 0 - this.paddingMod/2;\n\n    const midX = x + (this.width()/2)\n    const midY = y + (this.height()/2);\n\n    this.squiggleLine(midX, y, midX, y+this.height());\n    this.squiggleLine(x, midY, x+this.width(), midY);\n  }\n}\n\nclass EtchedPixel extends SquigglePixel {\n  draw() {\n    const delta = this.height() / this.face.etchesPerBox;\n    for (let etch = 0; etch < this.height(); etch+= delta) {\n      let thisDelta = map(this.face.R.random_dec(), 0, 1, -delta, delta);\n      let startNoise = map(this.face.R.random_dec(), 0, 1, -delta, delta)/2;\n      this.squiggleLine(-startNoise, etch, this.width()+(2*startNoise), etch + thisDelta);\n    }\n  }\n}\n\nclass EtchWeightPixel extends EtchedPixel {\n  setUp() {\n    noFill();\n    const c = this.getAlphaColor();\n    stroke(c);\n    this.adjustWeight();\n    push();\n    this.applyDistortions();\n  }\n}\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/pixels/squigglePixels.js?");

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Random {\n  constructor(seed) {\n    this.seed = seed\n  }\n  random_dec() {\n    /* Algorithm \"xor\" from p. 4 of Marsaglia, \"Xorshift RNGs\" */\n    this.seed ^= this.seed << 13\n    this.seed ^= this.seed >> 17\n    this.seed ^= this.seed << 5\n    return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000\n  }\n\n  whatAreTheOdds(threshold) {\n    return this.random_dec() < threshold;\n  }\n  random_num(a, b) {\n    return a+(b-a)*this.random_dec()\n  }\n  random_int(a, b) {\n    return Math.floor(this.random_num(a, b+1))\n  }\n  random_from_array(arr) {\n    let i = this.random_int(0, arr.length - 1);\n    return arr[i];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Random);\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/random.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"relSize\": () => (/* binding */ relSize),\n/* harmony export */   \"coolorToHex\": () => (/* binding */ coolorToHex)\n/* harmony export */ });\n\n// this is a good way to get a relative size for something / keep it responsive\nfunction relSize(pixelsIsh) { // this assumes square. sorry.\n  return width * (pixelsIsh / 1000);\n}\n\n// this is just a color util\nfunction coolorToHex(string) {\n  return string.split(\"-\").map((el) => {\n    return color(\"#\" + el);\n  });\n}\n\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;