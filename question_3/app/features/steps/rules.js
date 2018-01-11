"use strict";

const {
  Given,
  When,
  Then
} = require('cucumber')
const {
  expect,
  assert
} = require('chai')
const Board = require('../../src/model/board')

let board;

Given('Any live ​cell', () => {
  board = new Board(3, 3);
  board.setCell(1, 1, 1);

  board.setCell(0, 0, 1);
});

When('with ​fewer than {int} live ​neighbours', (two) => {
  const cell = board.getCell(1, 1)
  const count = board.countNeighbourCells(1, 1)
  assert.isBelow(count, two)
});

Then('dies, as if caused by underpopulation', () => {
  let cell = board.getCell(1, 1)
  const count = board.countNeighbourCells(1, 1)
  board.setNextGenCell(cell, count)
  expect(board.getCell(1, 1)).to.equal(0)
});

Given('Any ​live ​cell ​', () => {
  board = new Board(3, 3);
  board.setCell(1, 1, 1);

  board.setCell(0, 0, 1);
  board.setCell(0, 1, 1);
  board.setCell(2, 2, 1);
});

When('with {int} ​or {int} live neighbours', (two, three) => {
  const cell = board.getCell(1, 1)
  const count = board.countNeighbourCells(1, 1)
  expect(count).to.equal(three);
  expect(board.isNextGenCellActive(cell, count)).to.equal(true)
});

Then('lives ​on to the next generation', () => {
  const cell = board.getCell(1, 1)
  const count = board.countNeighbourCells(1, 1)
  board.setNextGenCell(cell, count)
  expect(board.getCell(1, 1)).to.equal(1)
});

Given('Any ​live ​cell', () => {
  board = new Board(3, 3);
  board.setCell(1, 1, 1);

  board.setCell(0, 0, 1);
  board.setCell(0, 1, 1);
  board.setCell(0, 2, 1);
  board.setCell(2, 2, 1);
});

When('with ​more than {int} ​live ​neighbours', (three) => {
  const cell = board.getCell(1, 1)
  const count = board.countNeighbourCells(1, 1)
  assert.isAbove(three, count)
  expect(board.isNextGenCellActive(cell, count)).to.equal(false)
});

Then('​dies, ​as ​if ​by overpopulation', () => {
  const cell = board.getCell(1, 1)
  const count = board.countNeighbourCells(1, 1)
  board.setNextGenCell(cell, count)
  expect(board.getCell(1, 1)).to.equal(0)
});

Given('Any ​dead cell', () => {
  board = new Board(3, 3);
  board.setCell(1, 1, 0);

  board.setCell(0, 0, 1);
  board.setCell(0, 1, 1);
  board.setCell(2, 2, 1);
});

When('with exactly ​{int} ​live ​neighbours', (three) => {
  const cell = board.getCell(1, 1)
  const count = board.countNeighbourCells(1, 1)
  expect(count).to.equal(three);
  expect(board.isNextGenCellActive(cell, count)).to.equal(true)
});

Then('becomes ​a ​live ​cell, ​as​ ​if ​by reproduction', () => {
  const cell = board.getCell(1, 1)
  const count = board.countNeighbourCells(1, 1)
  board.setNextGenCell(cell, count)
  expect(board.getCell(1, 1)).to.equal(1)
});
