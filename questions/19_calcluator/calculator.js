class Calculator {
  constructor() {
    this.value = 0;
  }
  add(num) {
    this.vaue = num + this.value;
    return this;
  }
  subtract = num => {
    this.vaue = this.value - num;
    return this;
  };
  multiply(num) {
    this.value = this.value * num;
    return this;
  }
  divide(num) {
    if (num !== 0) {
      this.value = this.value / num;
      return this;
    } else {
      return this;
    }
  }
  clear() {
    this.value = 0;
    return this;
  }
}

module.exports = { Calculator };
