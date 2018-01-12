const rewire = require("rewire");
const Board = rewire("./board");

describe("model/board unit test", () => {

  let board

  beforeEach(() => {
    board = new Board(3, 3)
  });

  it("should constructor() without error", () => {
    expect(board.data).toBeDefined();
  });

  it("should isCellActiveAndCountFewerThanTwo() without error", () => {
    expect(board.isCellActiveAndCountFewerThanTwo(1, 0)).toBe(true);
  });

  it("should isCellActiveAndCountTwoOrThree() to have two neighbours without error", () => {
    expect(board.isCellActiveAndCountTwoOrThree(1, 2)).toBe(true);
  });

  it("should isCellActiveAndCountTwoOrThree() to have three neighbours without error", () => {
    expect(board.isCellActiveAndCountTwoOrThree(1, 3)).toBe(true);
  });

  it("should isCellActiveAndCountMoreThanThree() without error", () => {
    expect(board.isCellActiveAndCountMoreThanThree(1, 4)).toBe(true);
  });

  it("should isCellInactiveAndCountExactlyThree() without error", () => {
    expect(board.isCellInactiveAndCountExactlyThree(0, 3)).toBe(true);
  });

  it("should setNextGenCell() to be active without error", () => {
    board.setCell(0, 0, 1)
    board.setCell(0, 1, 1)
    board.setCell(1, 0, 1)
    board.setCell(2, 1, 1)
    board.setNextGenCell(1, 1)

    expect(board.data[1][1]).toBe(1);
  });

  it("should setNextGenCell() not to be active without error", () => {
    board.setCell(1, 1, 1)
    board.setNextGenCell(1, 1)

    expect(board.data[1][1]).toBe(0);
  });

});
