var fs = require('fs');

var armies = {
    doges: [],
    cates: [],
    sneks: []
};

var text = fs.readFileSync('doges.txt', 'utf8');
addToArmy(text, armies.doges);
var text = fs.readFileSync('cates.txt', 'utf8');
addToArmy(text, armies.cates);
var text = fs.readFileSync('sneks.txt', 'utf8');
addToArmy(text, armies.sneks);

fs.writeFileSync('armies.json', JSON.stringify(armies));

function addToArmy(armyFrom, armyTo) { //1st argument - from (string), 2nd - to (array)
    armyTo = armyFrom.split(' ');
}