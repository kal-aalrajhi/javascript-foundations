
class Direwolf {
  constructor(name, home='Beyond the Wall', size='Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.huntsWhiteWalkers = true;
    this.starksToProtect = [];
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      this.huntsWhiteWalkers = false;
      stark.safe = true;
    }
  }

  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if(this.starksToProtect[i] === stark) {
        stark.safe = false;
        this.starksToProtect.splice(i, 1);
      }
    }
  }

}

module.exports = Direwolf;
