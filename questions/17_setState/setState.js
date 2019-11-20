// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.setState = this.setState.bind(this);
  }
  setState() {
    console.log(this);
    initialState.setStatefulThing(...this.initialState);
  }
}

module.exports = { StatefulThing };
