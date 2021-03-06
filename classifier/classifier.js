const lorca = require('lorca-nlp');

let ocurrences = 0;
let stemmsKeywords = [];
let keywordEx = [];
let tokensDel = [';', ':', ',', '?', '¿', '!', '¡', ' y ', ' e ', ' o ', ' u ', ' ni '];
let intentMinScore = 0.98;

function levenshteinDistance(a, b) {
	const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
	for (let i = 0; i <= a.length; i += 1) {
		distanceMatrix[0][i] = i;
	}

	for (let j = 0; j <= b.length; j += 1) {
		distanceMatrix[j][0] = j;
	}

	for (let j = 1; j <= b.length; j += 1) {
		for (let i = 1; i <= a.length; i += 1) {
			const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
			distanceMatrix[j][i] = Math.min(
				distanceMatrix[j][i - 1] + 1,
				distanceMatrix[j - 1][i] + 1,
				distanceMatrix[j - 1][i - 1] + indicator,
			);
		}
	}

	return distanceMatrix[b.length][a.length];
}


function splitMulti(str, tokens) {
	let tempChar = tokens[0];
	for (let i = 1; i < tokens.length; i++) {
		str = str.split(tokens[i]).join(tempChar);
	}
	str = str.split(tempChar);
	return str;
}

//Obtener si alguna oración tiene relación con alguna de las frases prestablecidas
exports.phrasesId = async function (posts, intents, managers) {
	let promisesArray = [];

	let results = [];
	// Entrenamos y salvamos el modelo.
	//Enviamos post oración por oración a verificar

	for (const post of posts) {
		let promisesPost = [];
		let sentences = splitMulti(post, '.');
		for (let i = 0; i < sentences.length; i++) {
			let sentenceChunks = [];
			if (sentences[i].length > 60) {
				sentenceChunks = [...splitMulti(sentences[i], tokensDel)];
			} else {
				sentenceChunks = [sentences[i]];
			}

			for (let j = 0; j < sentenceChunks.length; j++) {
				for (let k = 0; k < managers.length; k++) {
					promisesPost.push(managers[k].process('es', sentenceChunks[j]));
				}
			}
		}
		promisesArray.push(promisesPost);
	}

	//console.log(promisesArray);

	for (let i = 0; i < promisesArray.length; i++) {
		results.push(await Promise.all(promisesArray[i]));
	}


	/*
	let criteriaResults = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for (let i = 0; i < results.length; i++) {
		for (let j = 0; j < results[i].length; j++) {
			const element = results[i][j];
			console.log(element.score);
			console.log(intents[i])
			console.log(element.intent);
			if (element.intent === intents[i] && element.score > 0.50) {
				console.log("Utterance: " + element.utterance + " Intent: " + element.intent + " Score: " + element.score);
				if (element.score >= intentMinScore) {
					criteriaResults[i]++;
				}
			}
		}
	}*/


	return results;
	/*
		responses.forEach(element => {
			//console.log("Utterance: " + element.utterance + " Intent: " + element.intent + " Score: " + element.score);
			if (element.intent === intent && element.score > 0.70) {
				console.log("Utterance: " + element.utterance + " Intent: " + element.intent + " Score: " + element.score);
				//Si el intent tiene score por encima de 0.98 (o el definido para cada criterio) automaticamente se suma la ocurrencia
				if (element.score >= intentMinScore) {
					ocurrences++;
					return;
				}
				//Sacamos los stemms del utterance
				let utter = lorca(element.utterance);
				let stemmsUtterance = utter.words().stem().get();
				let count = 0;
				for (let i = 0; i < stemmsUtterance.length; i++) {
					for (let j = 0; j < stemmsKeywords.length; j++) {

						let levDistance = levenshteinDistance(stemmsUtterance[i], stemmsKeywords[j]);
						let totalLength = stemmsUtterance[i].length + stemmsKeywords[j].length;
						let simPercentage = levDistance * 100 / totalLength;
						if ((levDistance <= 2) && (simPercentage < 20) &&
							(stemmsUtterance[i].substring(0, 2) === stemmsKeywords[j].substring(0, 2)) &&
							!keywordEx.includes(stemmsUtterance[i])
						) {
							//console.log(stemmsUtterance[i] + "/" + stemmsKeywords[j]);
							//console.log(simPercentage + "%");
							//console.log("Levenshtein: " + levenshteinDistance(stemmsUtterance[i], stemmsKeywords[j]));
							if ((levDistance < 2 && simPercentage < 15)) {
								console.log(stemmsUtterance[i] + "/" + stemmsKeywords[j] + "/" + element.score);
								//console.log("Keywords Stemms" + stemmsKeywords);
								ocurrences++;
								return;
							}
						}
					}
				}
			}
		});
		return ocurrences;*/
}