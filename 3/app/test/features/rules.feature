Feature: Game of Life Rules
  In order to play
  As a player
  I want to validate game rules

  Scenario: A
    Given Any live ​cell
    When  with ​fewer than 2 live ​neighbours
    Then  dies, as if caused by underpopulation

  Scenario: B
    Given Any ​live ​cell ​
    When  with 2 ​or 3 live neighbours
    Then  lives ​on to the next generation

  Scenario: C
    Given Any ​live ​cell
    When  with ​more than 3 ​live ​neighbours
    Then  ​dies, ​as ​if ​by overpopulation

  Scenario: D
    Given Any ​dead cell
    When  with exactly ​3 ​live ​neighbours
    Then  becomes ​a ​live ​cell, ​as​ ​if ​by reproduction
