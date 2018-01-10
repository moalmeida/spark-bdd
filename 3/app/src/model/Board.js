"use strict";

let matrix = setMatrix(3, 3);

module.exports = {
  setMatrix: (heigth, width) => {
    matrix = Array(width).fill(Array(heigth).fill(0))
  }
  getCell: (x, y) => {
    return matrix[x, y]
  },
  setCell: (x, y, v) => {
    matrix[x, y] = v;
  }
}
