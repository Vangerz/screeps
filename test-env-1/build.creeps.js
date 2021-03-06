//this module checks the number of creeps and builds new ones
var buildCreeps = {

    run: function(creep) {
        //count the number of harvesters and spawn up to a predefined number
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    	console.log('Harvesters: ' + harvesters.length);
        if(harvesters.length < 2) {
            var newName = Game.spawns.SpawnA1.createCreep([MOVE, WORK, CARRY], undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }
    
        //count the number of upgraders and spawn up to a predefined number
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    	console.log('Upgraders: ' + upgraders.length);
        if(upgraders.length < 4) {
            var newName = Game.spawns.SpawnA1.createCreep([MOVE, WORK, CARRY], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }

        //count the number of builders and spawn up to a predefined number
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    	console.log('Builders: ' + builders.length);
        if(builders.length < 2) {
            var newName = Game.spawns.SpawnA1.createCreep([MOVE, WORK, CARRY], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
    }
};

module.exports = buildCreeps;