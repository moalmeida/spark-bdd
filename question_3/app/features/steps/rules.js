"use strict";

const {Given, When, Then} = require('cucumber');
const {expect} = require('chai')
// const neighbour = require('../../src/helper/neighbour');
const Board = require('../../src/model/board');

// let answer = true;
const widthPosition = 1;
const heigthPosition = 1
let board;
// let neighbours = 0;

Given('Any live ​cell', () => {
  board = new Board(3, 3);
  board.setCell(widthPosition, heigthPosition, 1);
  // Write code here that turns the phrase above into concrete actions
  // callback(null, 'pending');
});

When('with ​fewer than {int} live ​neighbours', (int) => {
  // Write code here that turns the phrase above into concrete actions
  // board.setCell(widthPosition, heigthPosition, 1);
  const cell = board.getCell(widthPosition, heigthPosition)
  expect(cell).to.equal(0);
  const cells = board.countNeighbourCells(widthPosition, heigthPosition)
  expect(cells).to.be.below(int)
  // callback(null, 'pending');
});

Then('dies, as if caused by underpopulation', () => {
  // Write code here that turns the phrase above into concrete actions
  // callback(null, 'pending');
});

Given('Any ​live ​cell ​', (callback) => {
  board = new Board(3, 3);
  // Write code here that turns the phrase above into concrete actions
  callback(null, 'pending');
});

When('with {int} ​or {int} live neighbours', (int, int2) => {
  // Write code here that turns the phrase above into concrete actions
  const cells = board.countNeighbourCells(widthPosition, heigthPosition)
  expect(cells).to.equal(int);
  expect(cells).to.equal(int2);
});

Then('lives ​on to the next generation', (callback) => {
  // Write code here that turns the phrase above into concrete actions
  callback(null, 'pending');
});

Given('Any ​live ​cell', (callback) => {
  board = new Board(3, 3);
  // Write code here that turns the phrase above into concrete actions
  callback(null, 'pending');
});

When('with ​more than {int} ​live ​neighbours', (int, callback) => {
  // Write code here that turns the phrase above into concrete actions
  const cells = board.countNeighbourCells(widthPosition, heigthPosition)
  expect(cells).to.equal(int);
  callback(null, 'pending');
});

Then('​dies, ​as ​if ​by overpopulation', (callback) => {
  // Write code here that turns the phrase above into concrete actions
  callback(null, 'pending');
});

Given('Any ​dead cell', (callback) => {
  board = new Board(3, 3);
  // Write code here that turns the phrase above into concrete actions
  callback(null, 'pending');
});

When('with exactly ​{int} ​live ​neighbours', (int, callback) => {
  // Write code here that turns the phrase above into concrete actions
  const cells = board.countNeighbourCells(widthPosition, heigthPosition)
  expect(cells).to.equal(int);
  callback(null, 'pending');
});

Then('becomes ​a ​live ​cell, ​as​ ​if ​by reproduction', (callback) => {
  // Write code here that turns the phrase above into concrete actions
  callback(null, 'pending');
});

// answer = table.raw()
//     .map(row => row[0])
//     .map(v => parseInt(v))
//     .reduce((current, next) => current + next, answer);
