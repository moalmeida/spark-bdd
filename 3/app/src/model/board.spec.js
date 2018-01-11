const rewire = require("rewire");
const Board = rewire("./board");

describe("model/board unit test", () => {

  let board

  beforeAll(() => {
    board = new Board(3, 3)
  });

  it("should constructor() without error", () => {
    expect(board.matrix).toBeDefined();
  });

  it("should setMatrix() without error", () => {});

  it("should setCell() without error", () => {});

  it("should getCell() without error", () => {});

  it("should getLeftUpperCell() without error", () => {});

  it("should getLeftMiddleCell() without error", () => {});

  it("should getLeftLowerCell() without error", () => {});

  it("should getMiddleUpperCell() without error", () => {});

  it("should getMiddleLowerCell() without error", () => {});

  it("should getRightUpperCell() without error", () => {});

  it("should getRightMiddleCell() without error", () => {});

  it("should getRightLowerCell() without error", () => {});

  it("should countNeighbourCells() without error", () => {});

});
