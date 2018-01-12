# SPARK

## QUESTION 1

### Run Docker
```sh
$ docker run fluvip/replace_text cat FLUVIP\ -\ Blog.html | sed '/^[@.]/! { s/fluvip/FLUVIP/Ig }' > result.html
```
### See result
Available result at file question_1/result.html

## QUESTION 2

### See result

```sh
Feature: Game of Life Rules
In order to play
As a player
I want to validate game rules

Scenario: Any live cell with fewer than two live neighbours dies, as if caused by underpopulation
    Given Any live cell
    When  with fewer than 2 live neighbours
    Then  dies, as if caused by underpopulation

Scenario: Any live cell with two or three live neighbours lives on to the next generation
    Given Any live cell
    When  with 2 or 3 live neighbours
    Then  lives on to the next generation

Scenario: Any live cell with more than three live neighbours dies, as if by overpopulation
    Given Any live cell
    When  with more than 3 live neighbours
    Then  dies, as if by overpopulation

Scenario: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
    Given Any dead cell
    When  with exactly 3 live neighbours
    Then  becomes a live cell, as if by reproduction
```

## QUESTION 3

### Show me the code
Available code at folder question_3/app

### Installation
This is required to load libraries and execute
```sh
$ npm install
```

### Run TDD
```sh
$ npm test
model/board unit test
    should constructor() without error: passed
    should isCellActiveAndCountFewerThanTwo() without error: passed
    should isCellActiveAndCountTwoOrThree() to have two neighbours without error: passed
    should isCellActiveAndCountTwoOrThree() to have three neighbours without error: passed
    should isCellActiveAndCountMoreThanThree() without error: passed
    should isCellInactiveAndCountExactlyThree() without error: passed
    should setNextGenCell() to be active without error: passed
    should setNextGenCell() not to be active without error: passed
model/matrix unit test
    should constructor() without error: passed
    should setCell() without error: passed
    should getCell() without error: passed
    should getLeftUpperCell() without error: passed
    should getLeftMiddleCell() without error: passed
    should getLeftLowerCell() without error: passed
    should getMiddleUpperCell() without error: passed
    should getMiddleLowerCell() without error: passed
    should getRightUpperCell() without error: passed
    should getRightMiddleCell() without error: passed
    should getRightLowerCell() without error: passed
    should countNeighbourCells() without error: passed
20 specs, 0 failures
Finished in 0 seconds
------------|----------|----------|----------|----------|----------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------|----------|----------|----------|----------|----------------|
 model/     |      100 |      100 |      100 |      100 |                |
 board.js  |      100 |      100 |      100 |      100 |                |
 matrix.js |      100 |      100 |      100 |      100 |                |
------------|----------|----------|----------|----------|----------------|
All files   |      100 |      100 |      100 |      100 |                |
------------|----------|----------|----------|----------|----------------|
=============================== Coverage summary ===============================
Statements   : 100% ( 29/29 )
Branches     : 100% ( 32/32 )
Functions    : 100% ( 20/20 )
Lines        : 100% ( 27/27 )
================================================================================
```


### Run BDD
```sh
$ npm run cucumber
4 scenarios (4 passed)
12 steps (12 passed)
```

## QUESTION 4

### Query
```sh
SELECT C.Nombre
FROM Clientes C
	LEFT JOIN Datos D1 ON C.ClienteID = D1.Cliente AND D1.Variable = 'Genero'
	LEFT JOIN Datos D2 ON C.ClienteID = D2.Cliente AND D2.Variable = 'Ciudad'
	LEFT JOIN Datos D3 ON C.ClienteID = D3.Cliente AND D3.Variable = 'Mascota'
GROUP BY C.ClienteID
HAVING 1=1
    AND (D1.Valor = 'F')
    AND (D2.Valor = 'Bogota')
    AND (D3.Valor = 'Si')
```

### See result
| Nombre  |
| ------  |
| Maria  |
