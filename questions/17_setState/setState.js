// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.previousStates = [initialState];
    //this.setState = this.setState.bind(this);
  }
  setState(newState) {
    //console.log(this.state);
    // this.state = { ...this.state, ...newState };
    this.state = Object.assign({}, this.state, newState);
    this.previousStates.push(this.state);
    return this.state;
  }

  goBack() {
    this.previousStates.pop();
    this.state = this.previousStates[this.previousStates.length - 1];
  }
}

module.exports = { StatefulThing };

// class StatefulThing {
//   constructor(initialState = {}) {
//     this.state = initialState;
//     this.prevStates = [];
//   }
//   setState(incomingState) {
//     //this.state= {...this.state, ...incomingState}
//     this.state = Object.assign({}, this.state, incomingState);
//     return this.state;
//   }
//   goBack() {
//     this.state = this.prevStates.pop();
//   }
// }

// module.exports = { StatefulThing };
