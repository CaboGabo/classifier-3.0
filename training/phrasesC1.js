//Identificador de consumo de sustancia o afección médica
const fs = require('fs');

const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});

let modelTag = './modelC1.nlp';

async function trainnlp() {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	//Consumo de sustancias
	manager.addDocument('es', 'Ingiero drogas', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero medicamentos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero sustancias', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero pastillas', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero quimicos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero narcóticos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero estupefaciente', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero alucinógenos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero somníferos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero medicamentos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero marihuana', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero cocaína', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero alcohol', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero porro', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero tranquilizante', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero anfetaminas', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero éxtasis', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero heroína', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero lsd', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero ácido', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo drogas', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo medicamentos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo sustancias', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo pastillas', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo quimicos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo narcóticos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo estupefaciente', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo alucinógenos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo somníferos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo medicamentos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo marihuana', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo cocaína', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo alcohol', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo porro', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo tranquilizante', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo anfetaminas', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo éxtasis', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo heroína', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo lsd', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo ácido', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo cocaina', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo droga', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo sustancias', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo quimicos', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo narcoticos', 'consumoAfeccion');
	manager.addDocument('es', 'Bebo alcohol', 'consumoAfeccion');

	manager.addDocument('es', 'Fumo marihuana', 'consumoAfeccion');
	manager.addDocument('es', 'Fumo sustancias', 'consumoAfeccion');
	manager.addDocument('es', 'Fumo químicos', 'consumoAfeccion');
	manager.addDocument('es', 'Fumo porro', 'consumoAfeccion');


	//Afección médica
	manager.addDocument('es', 'Estoy enfermo', 'consumoAfeccion');
	manager.addDocument('es', 'Estoy enferma', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo una enfermedad', 'consumoAfeccion');
	manager.addDocument('es', 'Me diagnosticaron una enfermedad', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo una enferemedad diagnosticada', 'consumoAfeccion');
	manager.addDocument('es', 'Es por mi enfermedad', 'consumoAfeccion');
	manager.addDocument('es', 'Seguro es por mi enfermedad', 'consumoAfeccion');
	manager.addDocument('es', 'Mi enfermedad', 'consumoAfeccion');

	manager.addDocument('es', 'Tengo una afección', 'consumoAfeccion');
	manager.addDocument('es', 'Me diagnosticaron una afección', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo una afección diagnosticada', 'consumoAfeccion');
	manager.addDocument('es', 'Es por mi afección', 'consumoAfeccion');
	manager.addDocument('es', 'Seguro es por mi afección', 'consumoAfeccion');
	manager.addDocument('es', 'Mi afección', 'consumoAfeccion');

	manager.addDocument('es', 'Tengo una afección medica', 'consumoAfeccion');
	manager.addDocument('es', 'Me diagnosticaron una afección medica', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo una afección medica diagnosticada', 'consumoAfeccion');
	manager.addDocument('es', 'Es por mi afección medica', 'consumoAfeccion');
	manager.addDocument('es', 'Seguro es por mi afección medica', 'consumoAfeccion');
	manager.addDocument('es', 'Mi afección medica', 'consumoAfeccion');

	manager.addDocument('es', 'Tengo un padecimiento', 'consumoAfeccion');
	manager.addDocument('es', 'Me diagnosticaron un padecimiento', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo un padecimiento diagnosticado', 'consumoAfeccion');
	manager.addDocument('es', 'Es por mi padecimiento', 'consumoAfeccion');
	manager.addDocument('es', 'Seguro es por mi padecimiento', 'consumoAfeccion');
	manager.addDocument('es', 'Mi padecimiento', 'consumoAfeccion');

//**********************************************************************************************************


	//No presentan niguno
	manager.addDocument('es', 'Ingiero comida', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Ingiero papas fritas', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Ingiero refresco', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Ingiero coca cola', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Ingiero golosinas', 'sin_ConsumoAfeccion');

	manager.addDocument('es', 'Consumo comida', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Consumo papas fritas', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Consumo refresco', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Consumo coca cola', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Consumo golosinas', 'sin_ConsumoAfeccion');

	manager.addDocument('es', 'Bebo agua', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo refresco', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo coca cola', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo cafe', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo te', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo jugo', 'sin_ConsumoAfeccion');

	manager.addDocument('es', 'Es una sonrisa tranquilizadora', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'qué es', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'que aún no es', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Cada vez me canso más', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'ya no tengo pilas para nada', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Estoy exahusto', 'sin_ConsumoAfeccion');
	

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