import * as utils from './utils';

globalThis.SQUARES_AND_SQUIGGLES = 'square and squiggle';
globalThis.SQUARES = 'square';
globalThis.SQUIGGLES_ONLY = 'squiggle';
globalThis.SQUIGGLE_CROSSED = 'squiggle crossed';
globalThis.ETCHED_HORIZONTAL = 'etched - horizontal';
globalThis.ETCHED_VERTICAL = 'etched - vertical';
globalThis.ETCHED = 'etched - both';
globalThis.DRUNK_SQUARES = 'squares: drunk';
globalThis.DRUNK_SQUIGGLES = 'squiggles: drunk';
globalThis.CIRCLES_LOL = 'circles';
globalThis.SQUARES_JUMBLED = 'jumbly boys';
globalThis.SQUIGGLES_JUMBLED = 'SQUIGGLE JUMBLES, boys!!!';

globalThis.SQUARES_OUTLINE = 'square outline';
globalThis.CIRCLES_OUTLINE = 'circle outline';
globalThis.STROKE_WEIGHT_PIXEL = 'stroke weight';
globalThis.CIRCLE_WEIGHT_PIXEL = 'circle - by weight';
globalThis.ETCH_WEIGHT_PIXEL = 'etch - by weight';

export const METHODS = [
  SQUARES,
  CIRCLES_LOL,
  SQUIGGLES_ONLY,
  SQUIGGLE_CROSSED,
  SQUARES_OUTLINE,
  CIRCLES_OUTLINE,
  SQUARES_AND_SQUIGGLES,
  ETCHED_HORIZONTAL,
  STROKE_WEIGHT_PIXEL,
  CIRCLE_WEIGHT_PIXEL,
  ETCH_WEIGHT_PIXEL

  // SQUARES_AND_SQUIGGLES, 
  // , 
  // ETCHED_HORIZONTAL,
  // ETCHED,
  // DRUNK_SQUARES,

  // SQUARES_AND_SQUIGGLES, 
  // SQUARES, 
  // SQUIGGLE_CROSSED, 
  // ETCHED_HORIZONTAL,
  // // ETCHED_VERTICAL,
  // ETCHED,
  // DRUNK_SQUARES,
  // // copy so that squiggles-only are more rare
  // SQUIGGLES_ONLY, 
  // DRUNK_SQUIGGLES,

  // SQUARES_JUMBLED,
  // SQUIGGLES_JUMBLED,
  // SQUIGGLES_ONLY
];

const faceSkeleton_DEBUG = [
  [0, 2, 0],
  [1, 5, 3],
  [0, 4, 0]
];

const faceSkeleton_REAL = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 2, 1, 1, 1, 2, 2, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 5, 5, 1, 3, 5, 5, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 4, 3, 1, 5, 4, 4, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 1, 2, 1, 5, 3, 3, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 1, 2, 4, 4, 3, 3, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 3, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 2, 5, 5, 2, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 2, 2, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

export const faceSkeleton = faceSkeleton_REAL;

export const colorOptions = [
  'f9b4ed-e574bc-c52184-334139-1e2d24', // pink
  'e4cbc9-8fc0a9-70877f-684551-402e2a', // sorta neutral mint
  'efd3d7-bdb59e-c99418-bf0603-533b4d', // maryland
  'e0dbcc-a3b4a2-2893cc-187795-315c5e', // true north
  'f2edeb-ff99b9-3d7ab8-724672-4b303d', // trans pride
  'acfcd9-7cdfcd-ab92bf-4a6c6f-231f20', // jazzy cup
  'f0f3bd-02c39a-028090-05668d-121420', // ocean
  'dfbe99-b5bd89-ec9192-db5375-95190c', // garden pastels
  'd8dcff-c38d94-a76571-565676-403B3B', // clay, sorta
  'ebf5df-d4d4aa-edb458-e8871e-3c1518', // pumpkin
  'd9f0ff-a3d5ff-83c9f4-6f73d2-474973', // another ice friend
  'ebf8dd-99d6b6-5c9999-4d5359-4a4238', // seafoam
  'e8d7f1-d3bccc-a167a5-4a306d-0e273c', // night mode
  'f8f2dc-aac7da-dea47e-cd4631-653f29', // vaguely patriotic idk
];