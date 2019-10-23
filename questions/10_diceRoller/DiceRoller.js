// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, numDice) {
    if (sides === 0 || side < 1 || numDice < 1) throw console.error("error");
    else this.sides = sides;
    this.numDice = numDice;
    this.rollHistory = [];
  }
  roll() {
    return this.rollHistory.push(this.sides * this.numDice);
  }
  history() {
    console.log(this.rollHistory.join(","));
    return this.rollHistory.join(",");
  }
}

module.exports = { DiceRoller };
