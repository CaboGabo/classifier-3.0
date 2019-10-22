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
const c1 = require('./training/phrasesC1');

const classifier = require('./classifier/classifier');

async function main(posts) {
    const managers = await Promise.all([a2.trainnlp(), a3.trainnlp(), a4.trainnlp(), a6.trainnlp(), a7.trainnlp(), a8.trainnlp(), a9.trainnlp(), b1.trainnlp(), b4.trainnlp(), b6.trainnlp(), c1.trainnlp()]);
    var intents = ['perdidaInteres', 'modPeso', 'insomnio', 'fatiga', 'inutilidad',
        'disminucionPensar', 'p_muerte', 'malestar', 'bajaAutoestima',
        'desesperanza', 'consumoAfeccion'
    ];

    const results = await classifier.phrasesId(posts, intents, managers);

    return results;
}

main().then(managers => console.log(managers));