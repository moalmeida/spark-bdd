"use strict";

const _ = require('lodash');

module.exports = class Matrix {

  constructor(heigth, width) {
    this.setMatrix(heigth, width)
  }

  setMatrix(heigth, width) {
    this.matrix = _.range(heigth).map(() => _.range(width).map(() => 0));
  }

  setCell(x, y, v) {
    this.matrix[x][y] = eval(v)
  }

  getCell(x, y) {
    return this.matrix[x][y]
  }

  getLeftUpperCell(x, y) {
    return eval(this.getCell(x - 1, y - 1)) || 0
  }

  getLeftMiddleCell(x, y) {
    return eval(this.getCell(x - 1, y)) || 0
  }

  getLeftLowerCell(x, y) {
    return eval(this.getCell(x - 1, y + 1)) || 0
  }

  getMiddleUpperCell(x, y) {
    return eval(this.getCell(x, y - 1)) || 0
  }

  getMiddleLowerCell(x, y) {
    return eval(this.getCell(x, y + 1)) || 0
  }

  getRightUpperCell(x, y) {
    return eval(this.getCell(x + 1, y - 1)) || 0
  }

  getRightMiddleCell(x, y) {
    return eval(this.getCell(x + 1, y)) || 0
  }

  getRightLowerCell(x, y) {
    return eval(this.getCell(x + 1, y + 1)) || 0
  }

  countNeighbourCells(x, y) {
    return (this.getLeftUpperCell(x, y) +
      this.getLeftMiddleCell(x, y) +
      this.getLeftLowerCell(x, y) +
      this.getMiddleUpperCell(x, y) +
      this.getMiddleLowerCell(x, y) +
      this.getRightUpperCell(x, y) +
      this.getRightMiddleCell(x, y) +
      this.getRightLowerCell(x, y)
    )
  }

};
