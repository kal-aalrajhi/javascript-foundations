const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(stark) {
    this.name = stark.name;
    this.location = stark.area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (!this.safe) {
      return 'Winter is Coming';
    } else {
      return 'The North Remembers';
    }
  }

  callDirewolf(name, location) {
    var direwolf = new Direwolf(name, location);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark;
