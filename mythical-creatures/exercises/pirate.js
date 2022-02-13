class Pirate {
    constructor(name, job='scallywag') {
        this.name = name;
        this.job = job;
        this.cursed = false;
        this.booty = 0;
        this.robberies = 0;
    }

    robShip() {
        this.robberies += 1;

        if (this.robberies < 6) {
            this.booty += 100;
            return 'YAARRR!';
        } else {
            this.cursed = true;
            return 'ARG! I\'ve been cursed!'
        }
    }

    liftCurse() {
        if (this.cursed && this.booty >= 300) {
            this.booty -= 300;
            this.cursed = false;
            return 'Your curse has been lifted!';
        } else {
            return 'You don\'t need to lift a curse!';
        }
    }
}

module.exports = Pirate;