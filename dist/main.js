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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"METHODS\": () => (/* binding */ METHODS),\n/* harmony export */   \"faceSkeleton\": () => (/* binding */ faceSkeleton),\n/* harmony export */   \"colorOptions\": () => (/* binding */ colorOptions)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nglobalThis.SQUARES_AND_SQUIGGLES = 'square and squiggle';\nglobalThis.SQUARES = 'square';\nglobalThis.SQUIGGLES_ONLY = 'squiggle';\nglobalThis.SQUIGGLE_CROSSED = 'squiggle crossed';\nglobalThis.ETCHED_HORIZONTAL = 'etched - horizontal';\nglobalThis.ETCHED_VERTICAL = 'etched - vertical';\nglobalThis.ETCHED = 'etched - both';\nglobalThis.DRUNK_SQUARES = 'squares: drunk';\nglobalThis.DRUNK_SQUIGGLES = 'squiggles: drunk';\n\nconst METHODS = [\n  SQUARES_AND_SQUIGGLES, \n  SQUARES, \n  SQUIGGLE_CROSSED, \n  ETCHED_HORIZONTAL,\n  ETCHED_VERTICAL,\n  ETCHED,\n  DRUNK_SQUARES,\n\n  SQUARES_AND_SQUIGGLES, \n  SQUARES, \n  SQUIGGLE_CROSSED, \n  ETCHED_HORIZONTAL,\n  ETCHED_VERTICAL,\n  ETCHED,\n  DRUNK_SQUARES,\n  // copy so that squiggles-only are more rare\n  SQUIGGLES_ONLY, \n  DRUNK_SQUIGGLES\n];\n\nconst faceSkeleton_DEBUG = [\n  [0, 2, 0],\n  [1, 5, 3],\n  [0, 4, 0]\n];\n\nconst faceSkeleton_REAL = [\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 2, 1, 1, 1, 2, 2, 4, 0, 0, 0, 0],\n  [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 3, 0, 0, 0, 0],\n  [0, 0, 0, 0, 3, 5, 5, 1, 3, 5, 5, 4, 0, 0, 0, 0],\n  [0, 0, 0, 0, 2, 4, 3, 1, 5, 4, 4, 3, 0, 0, 0, 0],\n  [0, 0, 0, 0, 2, 1, 2, 1, 5, 3, 3, 3, 0, 0, 0, 0],\n  [0, 0, 0, 0, 2, 1, 2, 4, 4, 3, 3, 4, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 3, 4, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 3, 2, 5, 5, 2, 4, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 3, 2, 2, 3, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n]\n\nconst faceSkeleton = faceSkeleton_REAL;\n\nconst colorOptions = [\n  'd9f0ff-a3d5ff-83c9f4-6f73d2-474973-7681b3',\n  'ebf5df-d4d4aa-edb458-e8871e-3c1518-bad4aa',\n  'd8dcff-c38d94-a76571-565676-5a5353-aeadf0',\n  'dfbe99-b5bd89-ec9192-db5375-95190c-729ea1',\n  'f0f3bd-02c39a-00a896-028090-05668d-121420',\n  'acfcd9-7cdfcd-ab92bf-4a6c6f-231f20-312f2f',\n  'f2edeb-ff99b9-3d7ab8-724672-4b303d',\n  'e0dbcc-a3b4a2-2893cc-187795-315c5e',\n  'f9b4ed-e574bc-c52184-334139-1e2d24',\n  'efd3d7-bdb59e-c99418-bf0603-533b4d'\n];\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/constants.js?");

/***/ }),

/***/ "./src/face.js":
/*!*********************!*\
  !*** ./src/face.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ \"./src/random.js\");\n/* harmony import */ var _hashUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hashUtils */ \"./src/hashUtils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n// Turn the hash into hash pairs.\n// This means 0xeca4cf6288eb455f388301c28ac01a8da5746781d22101a65cb78a96a49512c8\n// turns into [\"ec\", \"a4\", \"cf\", \"62\", \"88\", \"eb\", ...]\n\n\n\n\n\n\nlet decPairs, seed;\n\n/// ok, those were the utils.\n\nlet padding, gridArea, face;\n\nconst minSkew = 0.5;\nconst maxSkew = 1.2;\nconst defaultColor = 'rgba(255, 255, 255, 0.03)';\nconst noiseMod = 0.5;\n\nfunction setFeature(k, v) {\n  features[k] = v;\n}\n\nfunction getColors(s) {\n  return _utils__WEBPACK_IMPORTED_MODULE_2__.coolorToHex(s);\n}\n\nclass Face {\n  constructor() {\n    const u = new _hashUtils__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.decPairs = u.decPairs;  \n    this.R = new _random__WEBPACK_IMPORTED_MODULE_0__[\"default\"](u.seed);\n    noiseSeed(u.seed);\n\n    this.padding = map(this.decPairs[0], 0, 255, _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(10), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(20)); // 0 = padding\n    setFeature('padding', this.padding);\n\n    this.flipped = u.whatAreTheOdds(8, 0.5);\n    setFeature('flipped', this.flipped);\n    this.flipSkeleton();\n\n    const totalHeight = height - (2*this.padding);\n    this.totalWidth = width - (2*this.padding);\n    this.baseSquareSize = totalHeight / this.skeleton.length;\n\n    this.colors = getColors(u.getFromArray(1, _constants__WEBPACK_IMPORTED_MODULE_3__.colorOptions)); // 1 = colors\n    setFeature('first color', this.colors[0]);\n\n\n    this.paddingMod = u.getFromArray(2, [_utils__WEBPACK_IMPORTED_MODULE_2__.relSize(20), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(-2), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(2), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(2), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(2), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(10)])\n    setFeature('paddingMod', this.paddingMod);\n    // 2 = the padding of the squares\n    this.calcOffsets();\n\n    this.background = u.whatAreTheOdds(3, 0.5) ? '#0f0f0f' : '#222222';\n\n    this.subsegments = Math.floor(map(this.decPairs[4], 0, 255, 3, 15)); // 4 = how wiggly are the lines\n    setFeature('subsegments', this.subsegments);\n\n    this.drawBackgroundBlocks = u.whatAreTheOdds(5, 0.2);\n    setFeature('bgBlocks', this.bgBlocks);\n\n    this.maxRotation = u.percentMap(7)/4 + 0.05;\n    setFeature('maxRotation', this.maxRotation);\n    \n\n    this.drawMethod = u.getFromArray(9, _constants__WEBPACK_IMPORTED_MODULE_3__.METHODS);\n    setFeature('drawMethod', this.drawMethod);\n\n    this.standardWeight = u.getFromArray(6, [_utils__WEBPACK_IMPORTED_MODULE_2__.relSize(1), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(2), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(1), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(2), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(1), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(2), _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(3)]);\n\n    if(this.drawMethod == SQUIGGLES_ONLY || this.drawMethod == DRUNK_SQUIGGLES) {\n      this.standardWeight += _utils__WEBPACK_IMPORTED_MODULE_2__.relSize(2);\n    }\n    strokeWeight(this.standardWeight);    \n\n    this.etchesPerBox = map(this.decPairs[10], 0, 255, 5, 15);\n    setFeature('etches per box', this.etchesPerBox);\n\n    this.blendMode = u.whatAreTheOdds(11, 0.1) ? OVERLAY : BLEND;\n\n    if (this.blendMode == OVERLAY) {\n      this.background = u.whatAreTheOdds(3, 0.5) ? '#444444' : '#666666';\n    }\n\n    blendMode(this.blendMode);\n    setFeature('blendMode', this.blendMode);\n\n    this.squaresPerSquare = u.getFromArray(12, [3]);\n\n    if(this.drawMethod == ETCHED || this.drawMethod == ETCHED_HORIZONTAL || this.drawMethod == ETCHED_VERTICAL) {\n      this.squaresPerSquare = 1;\n    }\n    this.squareSize = this.baseSquareSize / this.squaresPerSquare;\n\n\n  }\n\n  flipSkeleton() {\n    this.skeleton = _constants__WEBPACK_IMPORTED_MODULE_3__.faceSkeleton;\n\n    if (this.flipped) {\n      for (let r = 0; r < this.skeleton.length; r++) {\n        this.skeleton[r].reverse();        \n      }\n    }\n\n  }\n\n  getColumnMod(i) {\n    return map(noise(i*noiseMod, 2), 0, 1, minSkew, maxSkew);\n  }\n  getRowMod(i) {\n    return map(noise(i*noiseMod, 1), 0, 1, minSkew, maxSkew);\n  }\n\n  calcOffsets() {\n    let h = 0;\n    let w = 0;\n    const squaresTall = this.skeleton.length;\n    const squaresWide = this.skeleton[0].length;\n    for (let i = 0; i < squaresWide; i++) {\n      w += this.getColumnMod(i)* this.squareSize;\n    }\n    for (let i = 0; i < squaresTall; i++) {\n      h += this.getRowMod(i)* this.squareSize;\n    }\n    w += this.paddingMod;\n    h += this.paddingMod;\n    this.offsetX = (width - w)/2;\n    setFeature('offsetX', this.offsetX);\n    this.offsetY = (height - h)/2;\n    setFeature('offsetY', this.offsetY);\n  }\n\n  draw() {\n    translate(this.offsetX, this.offsetY);\n    background(this.background);\n\n\n    push();\n    for (let y = 0; y < this.skeleton.length; y += (1 / this.squaresPerSquare)) {\n\n      let row = this.skeleton[Math.floor(y)];\n      \n      const rowModifier = this.getRowMod(y);\n      let amountShifted = 0;\n\n      for (let x = 0; x < row.length; x += (1 / this.squaresPerSquare)) {\n        const element = row[Math.floor(x)];\n        const colModifier = this.getColumnMod(x);\n\n        const squareWidth = colModifier * this.squareSize;\n        amountShifted += squareWidth;\n\n        switch (this.drawMethod) {\n          case SQUARES:\n            this.drawSquares(element, colModifier, rowModifier);\n            break;\n          case SQUARES_AND_SQUIGGLES:\n            this.drawSquares(element, colModifier, rowModifier);\n            this.drawSquiggle(element,colModifier, rowModifier);\n            break;\n          case SQUIGGLES_ONLY:\n            this.drawSquiggle(element,colModifier, rowModifier);\n            break;\n          case SQUIGGLE_CROSSED:\n            this.drawSquiggle(element,colModifier, rowModifier, true);\n            break;\n          case ETCHED_HORIZONTAL:\n            this.drawEtchedSquiggleH(element,colModifier, rowModifier);\n            break;  \n          case ETCHED_VERTICAL:\n            this.drawEtchedSquiggleV(element,colModifier, rowModifier);\n            break;  \n          case ETCHED:\n            this.drawEtchedSquiggleV(element,colModifier, rowModifier);\n            this.drawEtchedSquiggleH(element,colModifier, rowModifier);\n            break;\n          case DRUNK_SQUARES:\n            this.drawSquares(element, colModifier, rowModifier, true);\n            break;\n          case DRUNK_SQUIGGLES:\n            this.drawSquiggle(element, colModifier, rowModifier, false, true);\n            break;\n          default:\n            console.log(\"oh no!\");\n            break;\n        }\n\n        translate(squareWidth, 0);\n      }\n      translate(-amountShifted, this.squareSize * rowModifier);\n      amountShifted = 0;\n    }\n    pop();\n  }\n\n  getDrunk(colModifier, rowModifier) {\n    let w = (this.squareSize * colModifier + this.paddingMod)\n    let h = (this.squareSize * rowModifier + this.paddingMod)\n    translate(w/2, h/2);\n    const rot = this.R.random_num(-this.maxRotation, this.maxRotation);\n    rotate(rot);\n    translate(-w/2, -h/2);\n  }\n\n  drawSquares(element, colModifier, rowModifier, drunk = false) {\n    if (!this.drawBackgroundBlocks && element == 0) {\n      return;\n    }\n\n    noStroke();\n    const c = this.colors[element-1] || defaultColor;\n    fill(c);\n\n    push();\n    if (drunk) {\n      this.getDrunk(colModifier, rowModifier);\n    }\n    this.drawRect(element, colModifier, rowModifier);\n\n    pop();\n  }\n\n  getSquiggleColor(element) {\n    return this.colors[element-1] || defaultColor;\n  }\n\n  drawSquiggle(element, colModifier, rowModifier, withCross = false, drunk = false) {\n    if (!this.drawBackgroundBlocks && element == 0) {\n      return;\n    }\n    const c = this.getSquiggleColor(element);\n    stroke(c);\n\n    push();\n    if (drunk) {\n      this.getDrunk(colModifier, rowModifier);\n    }\n    \n    this.squiggleSquare(\n      0, \n      0, \n      this.squareSize * colModifier + this.paddingMod, \n      this.squareSize * rowModifier + this.paddingMod\n    );\n\n    if (withCross) {\n      this.squiggleCross(\n        0, \n        0, \n        this.squareSize * colModifier + this.paddingMod, \n        this.squareSize * rowModifier + this.paddingMod\n      );\n    }\n    pop();\n  }\n\n  drawEtchedSquiggleH(element, colModifier, rowModifier) {\n\n    if (!this.drawBackgroundBlocks && element == 0) {\n      return;\n    }\n\n    const c = this.getSquiggleColor(element);\n    stroke(c);\n\n    const h = (this.squareSize * rowModifier) + this.paddingMod;\n    const w = (this.squareSize * colModifier) + this.paddingMod;\n    const delta = h / this.etchesPerBox;\n    \n    for (let etch = 0; etch < h; etch+= delta) {\n      let thisDelta = delta * map(noise(etch * 0.3), 0, 1, -1, 1);\n      let startNoise = map(noise((etch + element) / 0.2, colModifier), 0, 1, -delta, delta)/2;\n\n      this.squiggleLine(-startNoise, etch, w+(2*startNoise), etch + thisDelta);\n    }\n  }\n\n  drawEtchedSquiggleV(element, colModifier, rowModifier) {\n\n    if (!this.drawBackgroundBlocks && element == 0) {\n      return;\n    }\n    const c = this.getSquiggleColor(element);\n    stroke(c);\n\n    const h = (this.squareSize * rowModifier) + this.paddingMod;\n    const w = (this.squareSize * colModifier) + this.paddingMod;\n    const delta = w / this.etchesPerBox;\n\n    for (let etch = 0; etch < w; etch += delta) {\n      let thisDelta = delta * map(noise(etch * 0.3), 0, 1, -1, 1);\n      let startNoise = map(noise((etch + element) / 0.2, colModifier), 0, 1, -delta, delta)/2;\n\n      this.squiggleLine(etch, -startNoise, etch + thisDelta, h+(2*startNoise));\n    }\n\n  }\n\n  squiggleCross(x, y, w, h) {\n    const midX = x + (w/2)\n    const midY = y + (h/2);\n    this.squiggleLine(midX, y, midX, y+h);\n    this.squiggleLine(x, midY, x+w, midY);\n  }\n\n  squiggleSquare(x, y, width, height) {\n    const x2 = x + width;\n    const y2 = y + height;\n\n    push();\n\n    this.squiggleLine(x, y, x2, y);\n    this.squiggleLine(x, y, x, y2);\n    this.squiggleLine(x2, y2, x2, y);\n    this.squiggleLine(x2, y2, x, y2);    \n\n    pop();\n  }\n\n  squiggleLine(x1, y1, x2, y2) {\n    push();\n    translate(x1, y1);\n  \n    let dX = x2 - x1;\n    let dY = y2 - y1;\n\n    let totalRotation = 0;\n\n\n    for (let index = 0; index < this.subsegments; index++) {\n      const thisMinR = -this.maxRotation - totalRotation;\n      const thisMaxR = this.maxRotation - totalRotation;\n      let rotation = map(this.R.random_dec(), 0, 1, thisMinR, thisMaxR);\n\n      totalRotation += rotation;\n      line(0, 0, dX/this.subsegments, dY/this.subsegments);\n      translate(dX/this.subsegments, dY/this.subsegments);\n      rotate(rotation);\n    }\n    pop();\n  }\n\n  drawRect(element, colModifier, rowModifier) {\n    rect(\n      0 - this.paddingMod/2, \n      0 - this.paddingMod/2, \n      this.squareSize * colModifier + this.paddingMod, \n      this.squareSize * rowModifier + this.paddingMod\n    );\n  }\n}\n\n\nlet canvas;\nfunction setup() {\n  // Grab the smaller of the window sizes and use that as the canvas size.\n  const smallerDimension = windowWidth < windowHeight ? windowWidth : windowHeight;\n  canvas = createCanvas(smallerDimension, smallerDimension);\n  canvas.parent(\"canvasParent\");\n  face = new Face();\n  render();  \n}\n\nfunction render() {\n  face.draw();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setup);\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/face.js?");

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

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Random {\n  constructor(seed) {\n    this.seed = seed\n  }\n  random_dec() {\n    /* Algorithm \"xor\" from p. 4 of Marsaglia, \"Xorshift RNGs\" */\n    this.seed ^= this.seed << 13\n    this.seed ^= this.seed >> 17\n    this.seed ^= this.seed << 5\n    return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000\n  }\n  random_num(a, b) {\n    return a+(b-a)*this.random_dec()\n  }\n  random_int(a, b) {\n    return Math.floor(this.random_num(a, b+1))\n  }\n  random_from_array(arr) {\n    let i = this.random_int(0, arr.length - 1);\n    return arr[i];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Random);\n\n//# sourceURL=webpack://art-blocks-starter-template/./src/random.js?");

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