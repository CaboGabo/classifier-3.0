const b1 = require('./training/phrasesB1');


b1.trainnlp().then((manager) => {
    console.log(manager)
});