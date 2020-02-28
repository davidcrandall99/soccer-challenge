
/**
 * 
 * parseGames(data)
 *  This parses a string of data -- it can be single or multiline.
 * The script will return 'false' if there is an issue with the data, specifically, if there are not enough teams in a game or if the score is not a number.
 */
let parseGames = x => {
	if (!x || x === false) {
	  return false;
	}
	try {
	//* seperate each game into an item in 'games'
	let games = x.split(/\n/).map(data => data
		.split(',') //split the string at commas AFTER splitting at new lines
		.map(teamScore => {
			const score = Number(
			  teamScore.substring(
				 teamScore.lastIndexOf(' ') + 1
			  )
			);
			const team = teamScore.replace(score, '').trim();
			return { team, score };
		 })
	)
	game = games[0];
	for (i in games) {
		if (Number.isNaN(games[i][0].score)|| Number.isNaN(games[i][1].score)) {
			return false;
		}
	}
	return games;
 } catch(err) {
	 console.log('There was a problem with the data you entered. Please make sure it is formatted correctly')
	 return false;
 }
}

module.exports = parseGames;


//test
parseGames(`San Jose Earthquakes 3, Santa Cruz Slugs 3
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
Santa Cruz Slugs 1, Felton Lumberjacks 1`);