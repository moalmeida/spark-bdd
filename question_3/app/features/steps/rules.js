"use strict";

const {Given, When, Then, Before} = require('cucumber')
const {expect, assert} = require('chai')
const Board = require('../../src/model/board')

let board;

Before(() => {
  board = new Board(3, 3);
});

Given('Any live ​cell', () => {
  board.setCell(1, 1, 1);
  board.setCell(0, 0, 1);
});

When('with ​fewer than {int} live ​neighbours', (two) => {
  const count = board.countNeighbourCells(1, 1)
  assert.isBelow(count, two)
});

Then('dies, as if caused by underpopulation', () => {
  board.setNextGenCell(1, 1)
  expect(board.getCell(1, 1)).to.equal(0)
});

Given('Any ​live ​cell ​', () => {
  board.setCell(1, 1, 0);
  board.setCell(0, 0, 1);
  board.setCell(0, 1, 1);
  board.setCell(2, 2, 1);
});

When('with {int} ​or {int} live neighbours', (two, three) => {
  const count = board.countNeighbourCells(1, 1)
  expect(count).to.equal(three);
});

Then('lives ​on to the next generation', () => {
  board.setNextGenCell(1, 1)
  expect(board.getCell(1, 1)).to.equal(1)
});

Given('Any ​live ​cell', () => {
  board.setCell(1, 1, 1);
  board.setCell(0, 0, 1);
  board.setCell(0, 1, 1);
  board.setCell(0, 2, 1);
  board.setCell(2, 2, 1);
});

When('with ​more than {int} ​live ​neighbours', (three) => {
  const count = board.countNeighbourCells(1, 1)
  assert.isAbove(count, three)
});

Then('​dies, ​as ​if ​by overpopulation', () => {
  board.setNextGenCell(1, 1)
  expect(board.getCell(1, 1)).to.equal(0)
});

Given('Any ​dead cell', () => {
  board.setCell(1, 1, 0);
  board.setCell(0, 0, 1);
  board.setCell(0, 1, 1);
  board.setCell(2, 2, 1);
});

When('with exactly ​{int} ​live ​neighbours', (three) => {
  const count = board.countNeighbourCells(1, 1)
  expect(count).to.equal(three);
});

Then('becomes ​a ​live ​cell, ​as​ ​if ​by reproduction', () => {
  board.setNextGenCell(1, 1)
  expect(board.getCell(1, 1)).to.equal(1)
});
