class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.feedCount = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    if (this.feedCount < 2) {
      this.feedCount += 1;
    } else {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
