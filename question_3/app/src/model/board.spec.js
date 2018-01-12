const rewire = require("rewire");
const Board = rewire("./board");

describe("model/board unit test", () => {

  let board

  beforeEach(() => {
    board = new Board(3, 3)
  });

  it("should constructor() without error", () => {
    expect(board.data).toBe();
  });

  it("should isCellActiveAndCountFewerThanTwo() without error", () => {
    expect(board.isCellActiveAndCountFewerThanTwo(1, 0)).toBe(true);
  });

  it("should isCellActiveAndCountTwoOrThree() without error", () => {
    expect(board.isCellActiveAndCountTwoOrThree(1, 2)).toBe(true);
  });

  it("should isCellActiveAndCountMoreThanThree() without error", () => {
    expect(board.isCellActiveAndCountMoreThanThree(1, 4)).toBe(true);
  });

  it("should isCellInactiveAndCountExactlyThree() without error", () => {
    expect(board.isCellInactiveAndCountExactlyThree(0, 3)).toBe(true);
  });

  it("should setNextGenCell() without error", () => {
    // expect(board.data).toBe();
  });

  it("should isNextGenCellActive() without error", () => {
    // expect(board.data).toBe();
  });

});
