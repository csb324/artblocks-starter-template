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

export const METHODS = [
  SQUARES_AND_SQUIGGLES, 
  SQUARES, 
  SQUIGGLE_CROSSED, 
  ETCHED_HORIZONTAL,
  ETCHED_VERTICAL,
  ETCHED,
  DRUNK_SQUARES,

  SQUARES_AND_SQUIGGLES, 
  SQUARES, 
  SQUIGGLE_CROSSED, 
  ETCHED_HORIZONTAL,
  ETCHED_VERTICAL,
  ETCHED,
  DRUNK_SQUARES,
  // copy so that squiggles-only are more rare
  SQUIGGLES_ONLY, 
  DRUNK_SQUIGGLES
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
  [0, 0, 0, 0, 0, 2, 1, 1, 1, 2, 2, 4, 0, 0, 0, 0],
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
  'd9f0ff-a3d5ff-83c9f4-6f73d2-474973-7681b3',
  'ebf5df-d4d4aa-edb458-e8871e-3c1518-bad4aa',
  'd8dcff-c38d94-a76571-565676-5a5353-aeadf0',
  'dfbe99-b5bd89-ec9192-db5375-95190c-729ea1',
  'f0f3bd-02c39a-00a896-028090-05668d-121420',
  'acfcd9-7cdfcd-ab92bf-4a6c6f-231f20-312f2f',
  'f2edeb-ff99b9-3d7ab8-724672-4b303d',
  'e0dbcc-a3b4a2-2893cc-187795-315c5e',
  'f9b4ed-e574bc-c52184-334139-1e2d24',
  'efd3d7-bdb59e-c99418-bf0603-533b4d'
];