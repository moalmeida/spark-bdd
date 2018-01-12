const rewire = require("rewire");
const Matrix = rewire("./matrix");

describe("model/matrix unit test", () => {

  let matrix

  beforeEach(() => {
    matrix = new Matrix(3, 3)
  });

  it("should constructor() without error", () => {
    expect(matrix.data).toBeDefined();
  });

  it("should setCell() without error", () => {
    const res = 1;
    matrix.setCell(0, 0, res)

    expect(matrix.data[0][0]).toBe(res);
  });

  it("should getCell() without error", () => {
    const res = 1;
    matrix.data[0][0] = res

    expect(matrix.getCell(0, 0)).toBe(res);
  });

  it("should getLeftUpperCell() without error", () => {
    const res = 1;
    matrix.data[0][0] = res

    expect(matrix.getLeftUpperCell(1, 1)).toBe(res);
  });

  it("should getLeftMiddleCell() without error", () => {
    const res = 1;
    matrix.data[0][1] = res

    expect(matrix.getLeftMiddleCell(1, 1)).toBe(res);
  });

  it("should getLeftLowerCell() without error", () => {
    const res = 1;
    matrix.data[0][2] = res

    expect(matrix.getLeftLowerCell(1, 1)).toBe(res);
  });

  it("should getMiddleUpperCell() without error", () => {
    const res = 1;
    matrix.data[1][0] = res

    expect(matrix.getMiddleUpperCell(1, 1)).toBe(res);
  });

  it("should getMiddleLowerCell() without error", () => {
    const res = 1;
    matrix.data[1][2] = res

    expect(matrix.getMiddleLowerCell(1, 1)).toBe(res);
  });

  it("should getRightUpperCell() without error", () => {
    const res = 1;
    matrix.data[2][0] = res

    expect(matrix.getRightUpperCell(1, 1)).toBe(res);
  });

  it("should getRightMiddleCell() without error", () => {
    const res = 1;
    matrix.data[2][1] = res

    expect(matrix.getRightMiddleCell(1, 1)).toBe(res);
  });

  it("should getRightLowerCell() without error", () => {
    const res = 1;
    matrix.data[2][2] = res

    expect(matrix.getRightLowerCell(1, 1)).toBe(res);
  });

  it("should countNeighbourCells() without error", () => {
    const count = 1;
    matrix.data[0][0] = 1

    expect(matrix.countNeighbourCells(1, 1)).toBe(count);
  });

});
