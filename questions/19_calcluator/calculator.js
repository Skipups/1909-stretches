class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.vaue = num + this.value;
    return this.value;
  }
  subtract(num) {
    this.vaue = this.value - num;
    return this.value;
  }
  multiply(num) {
    this.value = this.value * num;
    return this.value;
  }
  divide(num) {
    if (num !== 0) {
      this.value = this.value / num;
    } else {
      return this.value;
    }
  }
  clear() {
    this.value = 0;
    return 0;
  }
}

module.exports = { Calculator };
