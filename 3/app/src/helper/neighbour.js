"use strict";

module.exports = {
  lu: (matrix, x, y) => {
    return matrix[
      x - 1,
      y - 1
    ];
  },
  lm: (matrix, x, y) => {
    return matrix[
      x + 1,
      y - 1
    ];
  },
  ll: (matrix, x, y) => {
    return matrix[
      x + 1,
      y - 1
    ];
  },
  mu: (matrix, x, y) => {
    return matrix[
      x - 1,
      y
    ];
  },
  ml: (matrix, x, y) => {
    return matrix[
      x + 1,
      y
    ];
  },
  ru: (matrix, x, y) => {
    return matrix[
      x - 1,
      y + 1
    ];
  },
  rm: (matrix, x, y) => {
    return matrix[
      x, y + 1
    ];
  },
  rl: (matrix, x, y) => {
    return matrix[
      x + 1,
      y + 1
    ];
  },
  countCells: (matrix, x, y) => {
    return lu(matrix, x, y) + lm(matrix, x, y) + ll(matrix, x, y) + mu(matrix, x, y) + ml(matrix, x, y) + ru(matrix, x, y) + rm(matrix, x, y) + rl(matrix, x, y);
  }
};
