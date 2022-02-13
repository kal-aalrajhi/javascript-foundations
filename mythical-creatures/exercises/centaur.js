
class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actionsTaken = 0;
  }

  shootBow() {
    if (!this.cranky && !this.layingDown) {
      this.actionsTaken++;
      this.checkIfTired();
      return 'Twang!!!';
    }
    return 'NO!';
  }

  run() {
    if (!this.cranky && !this.layingDown) {
      this.actionsTaken++;
      this.checkIfTired();
      return 'Clop clop clop clop!!!';
    }
    return 'NO!';
  }

  checkIfTired() {
    if (this.actionsTaken > 2) {
      this.cranky = true;
    }
  }

  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      this.actionsTaken = 0;
      return 'ZZZZ';
    }
    return "NO!";
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
      this.actionsTaken = 0;
    } else {
      return 'Not while I\'m laying down!'
    }
  }

  standUp() {
    if (!this.standing) {
      this.standing = true;
      this.layingDown = false;
    }
  }

  layDown() {
    if (!this.layingDown) {
      this.standing = false;
      this.layingDown = true;
    }
  }
}

module.exports = Centaur;
