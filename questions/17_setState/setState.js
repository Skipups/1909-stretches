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

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.prevStates = [];
  }
  setState(incomingState) {
    //this.state= {...this.state, ...incomingState}
    this.state = Object.assign({}, this.state, incomingState);
    return this.state;
  }
  goBack() {
    this.state = this.prevStates.pop();
  }
}

module.exports = { StatefulThing };
