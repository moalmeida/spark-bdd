"use strict";

module.exports = class Board {

  constructor(heigth, width) {
    this.setMatrix(heigth, width)
  }

  setMatrix(heigth, width) {
    this.matrix = Array(width).fill(Array(heigth).fill(0))
  }

  setCell(x, y, v) {
    this.matrix[x, y] = v;
  }

  getCell(x, y) {
    return this.matrix[x, y] || 0;
  }

  getLeftUpperCell(x, y) {
    return this.matrix[
      x - 1,
      y - 1
    ] || 0;
  }

  getLeftMiddleCell(x, y) {
    return this.matrix[
      x + 1,
      y - 1
    ] || 0;
  }

  getLeftLowerCell(x, y) {
    return this.matrix[
      x + 1,
      y - 1
    ] || 0;
  }

  getMiddleUpperCell(x, y) {
    return this.matrix[
      x - 1,
      y
    ] || 0;
  }

  getMiddleLowerCell(x, y) {
    return this.matrix[
      x + 1,
      y
    ] || 0;
  }

  getRightUpperCell(x, y) {
    return this.matrix[
      x - 1,
      y + 1
    ] || 0;
  }

  getRightMiddleCell(x, y) {
    return this.matrix[
      x, y + 1
    ] || 0;
  }

  getRightLowerCell(x, y) {
    return this.matrix[
      x + 1,
      y + 1
    ] || 0;
  }

  countNeighbourCells(x, y) {
    return this.getLeftUpperCell(x, y) + this.getLeftMiddleCell(x, y) + this.getLeftLowerCell(x, y) + this.getMiddleUpperCell(x, y) + this.getMiddleLowerCell(x, y) + this.getRightUpperCell(x, y) + this.getRightMiddleCell(x, y) + this.getRightLowerCell(x, y)

  }

};
