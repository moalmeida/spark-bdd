Feature: Game of Life Rules
  In order to play
  As a player
  I want to validate game rules

  Scenario: Any live cell with fewer than two live neighbours dies, ​as if caused by underpopulation
    Given Any live ​cell
    When  with ​fewer than 2 live ​neighbours
    Then  dies, as if caused by underpopulation

  Scenario: Any ​live cell with two or three live ​neighbours lives on to​ the next generation
    Given Any ​live ​cell ​
    When  with 2 ​or 3 live neighbours
    Then  lives ​on to the next generation

  Scenario: Any ​live ​cell with more ​than three live neighbours dies, as if by overpopulation
    Given Any ​live ​cell
    When  with ​more than 3 ​live ​neighbours
    Then  ​dies, ​as ​if ​by overpopulation

  Scenario: Any ​dead cell with exactly three ​live neighbours becomes a live cell, as if by reproduction
    Given Any ​dead cell
    When  with exactly ​3 ​live ​neighbours
    Then  becomes ​a ​live ​cell, ​as​ ​if ​by reproduction
