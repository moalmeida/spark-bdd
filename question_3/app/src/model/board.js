"use strict";

const _ = require('lodash');
const Matrix = require('./matrix');

module.exports = class Board extends Matrix {

  constructor(heigth, width) {
    super(heigth, width)
  }

  isCellActiveAndCountFewerThanTwo(cell, count) {
    return (cell == 1 && count < 2)
  }

  isCellActiveAndCountTwoOrThree(cell, count) {
    return (cell == 1 && (count == 2 || count == 3))
  }

  isCellActiveAndCountMoreThanThree(cell, count) {
    return (cell == 1 && count > 3)
  }

  isCellInactiveAndCountExactlyThree(cell, count) {
    return (cell == 0 && count == 3)
  }

  setNextGenCell(cell, count) {
    this.isNextGenCellActive(cell, count) ? cell = 1 : cell = 0
  }

  isNextGenCellActive(cell, count) {
    return (!(this.isCellActiveAndCountFewerThanTwo(cell, count) || this.isCellActiveAndCountMoreThanThree(cell, count)) ||
      (this.isCellActiveAndCountTwoOrThree(cell, count) || this.isCellInactiveAndCountExactlyThree(cell, count))
    )
  }

};
