"use strict";

const Matrix = require('./matrix');

module.exports = class Board extends Matrix {

  constructor(heigth, width) {
    super(heigth, width)
  }

  isCellActiveAndCountFewerThanTwo(cell, count) {
    return (cell == 1 && count < 2)
  }

  isCellActiveAndCountTwoOrThree(a, b) {
    return (cell == 1 && (count == 2 || count == 3))
  }

  isCellActiveAndCountMoreThanThree(a, b) {
    return (cell == 1 && count > 3)
  }

  isCellInactiveAndCountExactlyThree(a, b) {
    return (cell == 0 && count == 3)
  }

  isNextGenCellActive(x, y) {
    const cell = getCell(x, y);
    const count = countNeighbourCells(x, y);
    return (!isCellActiveAndCountFewerThanTwo(cell, count) &&
      isCellActiveAndCountTwoOrThree(cell, count) &&
      !isCellActiveAndCountMoreThanThree(cell, count) &&
      isCellInactiveAndCountExactlyThree(cell, count)
    )
  }

};
