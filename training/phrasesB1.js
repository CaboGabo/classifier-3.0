//Malestar clínicamente significativo o deterioro en lo social, laboral u otras áreas importantes del funcionamiento.
const fs = require('fs');
//ESTE MODULO AUN NO LO PRUEBO
const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});

let modelTag = './modelB1.nlp';

async function trainnlp() {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	//Explicito
	manager.addDocument('es', 'Deterioro social', 'malestar');
	manager.addDocument('es', 'Deterioro laboral', 'malestar');
	manager.addDocument('es', 'Deterioro en mis actividades diarias', 'malestar');


	//Deterioro social
	manager.addDocument('es', 'Me afecta socialmente', 'malestar');
	manager.addDocument('es', 'Me afecta en el ambito social', 'malestar');
	manager.addDocument('es', 'Me afecta con mi familia', 'malestar');
	manager.addDocument('es', 'Me afecta con mis padres', 'malestar');
	manager.addDocument('es', 'Me afecta con mi padre', 'malestar');
	manager.addDocument('es', 'Me afecta con mi madre', 'malestar');
	manager.addDocument('es', 'Me afecta con mis amigos', 'malestar');
	manager.addDocument('es', 'Me afecta con mis amigas', 'malestar');
	manager.addDocument('es', 'Me afecta con mis compañeros', 'malestar');
	manager.addDocument('es', 'Me afecta con mi compañero', 'malestar');
	manager.addDocument('es', 'Me afecta con mi compañera', 'malestar');

	manager.addDocument('es', 'Me está afectando socialmente', 'malestar');
	manager.addDocument('es', 'Me está afectando en el ambito social', 'malestar');
	manager.addDocument('es', 'Me está afectando con mi familia', 'malestar');
	manager.addDocument('es', 'Me está afectando con mis padres', 'malestar');
	manager.addDocument('es', 'Me está afectando con mi padre', 'malestar');
	manager.addDocument('es', 'Me está afectando con mi madre', 'malestar');
	manager.addDocument('es', 'Me está afectando con mis amigos', 'malestar');
	manager.addDocument('es', 'Me está afectando con mis amigas', 'malestar');
	manager.addDocument('es', 'Me está afectando con mis compañeros', 'malestar');
	manager.addDocument('es', 'Me está afectando con mi compañero', 'malestar');
	manager.addDocument('es', 'Me está afectando con mi compañera', 'malestar');

	manager.addDocument('es', 'Influye de manera negativa socialmente', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa en el ambito social', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa con mi familia', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa con mis padres', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa con mi padre', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa con mi madre', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa con mis amigos', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa con mis amigas', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa con mis compañeros', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa con mi compañero', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa con mi compañera', 'malestar');

	manager.addDocument('es', 'Esta influyendo de manera negativa socialmente', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa en mi socialmente', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa en mi ambito social', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa en el ambito social', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa con mi familia', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa con mis padres', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa con mi padre', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa con mi madre', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa con mis amigos', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa con mis amigas', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa con mis compañeros', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa con mi compañero', 'malestar');
	manager.addDocument('es', 'Esta influyendo de manera negativa con mi compañera', 'malestar');

	manager.addDocument('es', 'Me causa problemas socialmente', 'malestar');
	manager.addDocument('es', 'Me causa problemas en mi ambito social', 'malestar');
	manager.addDocument('es', 'Me causa problemas con mi familia', 'malestar');
	manager.addDocument('es', 'Me causa problemas con mis padres', 'malestar');
	manager.addDocument('es', 'Me causa problemas con mi padre', 'malestar');
	manager.addDocument('es', 'Me causa problemas con mi madre', 'malestar');
	manager.addDocument('es', 'Me causa problemas con mis amigos', 'malestar');
	manager.addDocument('es', 'Me causa problemas con mis amigas', 'malestar');
	manager.addDocument('es', 'Me causa problemas con mis compañeros', 'malestar');
	manager.addDocument('es', 'Me causa problemas con mi compañero', 'malestar');
	manager.addDocument('es', 'Me causa problemas con mi compañera', 'malestar');

	manager.addDocument('es', 'Me está causando problemas socialmente', 'malestar');
	manager.addDocument('es', 'Me está causando problemas en mi ambito social', 'malestar');
	manager.addDocument('es', 'Me está causando problemas con mi familia', 'malestar');
	manager.addDocument('es', 'Me está causando problemas con mis padres', 'malestar');
	manager.addDocument('es', 'Me está causando problemas con mi padre', 'malestar');
	manager.addDocument('es', 'Me está causando problemas con mi madre', 'malestar');
	manager.addDocument('es', 'Me está causando problemas con mis amigos', 'malestar');
	manager.addDocument('es', 'Me está causando problemas con mis amigas', 'malestar');
	manager.addDocument('es', 'Me está causando problemas con mis compañeros', 'malestar');
	manager.addDocument('es', 'Me está causando problemas con mi compañero', 'malestar');
	manager.addDocument('es', 'Me está causando problemas con mi compañera', 'malestar');

	//Deterioro laboral
	manager.addDocument('es', 'Me afecta laboralmente', 'malestar');
	manager.addDocument('es', 'Me afecta en el trabajo', 'malestar');
	manager.addDocument('es', 'Me afecta en la oficina', 'malestar');
	manager.addDocument('es', 'Me afecta en la escuela', 'malestar');

	manager.addDocument('es', 'Me está afectando laboralmente', 'malestar');
	manager.addDocument('es', 'Me está afectando en el trabajo', 'malestar');
	manager.addDocument('es', 'Me está afectando en la oficina', 'malestar');
	manager.addDocument('es', 'Me está afectando en la escuela', 'malestar');

	manager.addDocument('es', 'Influye de manera negativa laboralmente', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa en el trabajo', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa en la oficina', 'malestar');
	manager.addDocument('es', 'Influye de manera negativa en la escuela', 'malestar');

	manager.addDocument('es', 'Está influyendo de manera negativa laboralmente', 'malestar');
	manager.addDocument('es', 'Está influyendo de manera negativa en el trabajo', 'malestar');
	manager.addDocument('es', 'Está influyendo de manera negativa en la oficina', 'malestar');
	manager.addDocument('es', 'Está influyendo de manera negativa en la escuela', 'malestar');

	manager.addDocument('es', 'Me causa problemas laborales', 'malestar');
	manager.addDocument('es', 'Me causa problemas en el trabajo', 'malestar');
	manager.addDocument('es', 'Me causa problemas en la oficina', 'malestar');
	manager.addDocument('es', 'Me causa problemas en la escuela', 'malestar');

	manager.addDocument('es', 'Me está causando problemas laborales', 'malestar');
	manager.addDocument('es', 'Me está causando problemas en el trabajo', 'malestar');
	manager.addDocument('es', 'Me está causando problemas en la oficina', 'malestar');
	manager.addDocument('es', 'Me está causando problemas en la escuela', 'malestar');

	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo
	//manager.save(modelTag, true);
	return manager;
}

module.exports = {
	trainnlp
}