module.export.loop = function () {
    
//spawn creeps
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1',
{ memory: { role: 'builder' } } );



}