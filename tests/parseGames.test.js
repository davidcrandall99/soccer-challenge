let parseGames = require('../utils/parseGames');
describe('parseGames', () => {
	let goodData = `San Jose Earthquakes 3, Santa Cruz Slugs 3
	Capitola Seahorses 1, Aptos FC 0
	Felton Lumberjacks 2, Monterey United 0
	Felton Lumberjacks 1, Aptos FC 2
	Santa Cruz Slugs 0, Capitola Seahorses 0
	Monterey United 4, San Jose Earthquakes 2
	Santa Cruz Slugs 2, Aptos FC 3
	San Jose Earthquakes 1, Felton Lumberjacks 4
	Monterey United 1, Capitola Seahorses 0
	Aptos FC 2, Monterey United 0
	Capitola Seahorses 5, San Jose Earthquakes 5
	Santa Cruz Slugs 1, Felton Lumberjacks 1`

	let badData = `San Jose Earthquakes 3, Santa Cruz Slugs 3
	Capitola Seahorses 1, Aptos FC 0a
	Felton Lumberjacks 2, Monterey United 0
	Felton Lumberjacks 1, Aptos FC 2
	Santa Cruz Slugs 0, Capitola Seahorses 0
	Monterey United 4, San Jose Earthquakes 2
	Santa Cruz Slugs 2, Aptos FC 3
	San Jose Earthquakes 1, Felton Lumberjacks 4
	Monterey United 1, Capitola Seahorses 0
	Aptos FC 2, Monterey United 0
	Capitola Seahorses 5, San Jose Earthquakes 5
	Santa Cruz Slugs 1, Felton Lumberjacks 1`
	
	test('parseGames returns false when there is bad data', () => {
		expect(parseGames(badData)).toBe(false);
		expect(parseGames('badData')).toBe(false);
		expect(parseGames('team 1 score, team2 ')).toBe(false);
	});

	test('parseGames can parse text data', () =>{
		expect(typeof(parseGames(goodData))).toBe('object')
	})
});