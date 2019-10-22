const a2 = require('./training/phrasesA2');
const a3 = require('./training/phrasesA3');
const a4 = require('./training/phrasesA4');
const a6 = require('./training/phrasesA6');
const a7 = require('./training/phrasesA7');
const a8 = require('./training/phrasesA8');
const a9 = require('./training/phrasesA9');
const b1 = require('./training/phrasesB1');
const b4 = require('./training/phrasesB4');
const b6 = require('./training/phrasesB6');

async function main() {
    [managerA2, managerA3, managerA4, managerA6, managerA7, managerA8, managerA9, managerB1, managerB4, managerB6] = await Promise.all([a2.trainnlp(), a3.trainnlp(), a4.trainnlp(), a6.trainnlp(), a7.trainnlp(), a8.trainnlp(), a9.trainnlp(), b1.trainnlp(), b4.trainnlp(), b6.trainnlp()]);

    return managerA2;
}

main().then(manager => console.log(manager));