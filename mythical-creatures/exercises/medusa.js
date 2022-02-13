var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }

    gazeAtVictim(victim) {
        // turn latest victim into a statue
        var victimStatue = new Statue(victim.name);
        this.statues.push(victimStatue);

        // only 3 statues at a time
        if (this.statues.length > 3) {
            var freePerson = this.statues.shift();
            return new Person(freePerson.name, 'relieved');
        }
    }
}

module.exports = Medusa;