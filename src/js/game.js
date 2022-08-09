class Game {
	start() {
		console.log('game started');
	}
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

import Character from './domain.js';

console.log(Character);

export default { GameSavingData }
export { readGameSaving, writeGameSaving }