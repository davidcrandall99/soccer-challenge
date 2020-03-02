const createTable = require('./utils/createTable')
const insertRow = require('./utils/insertRow');
const getTextFile = require('./utils/getTextFile')
const parseGames = require('./utils/parseGames')
const parseArguments = require('./utils/parseArguments')
const checkPreviousMatch = require('./utils/checkPreviousMatch');
const getTables = require('./utils/getTables')
const sqlite3 = require('sqlite3').verbose();


export async function cli(args) {
	let options = parseArguments(args);
	var textInput; //this will be our single or multiline text input.
	
	//if the user asks for help, we can give some instructions.
	if (options.help === true) {
		console.info('Sample help text')
		return; //this ensures the rest of the function does not execute if the user is asking for help
	}

	//only one argument allowed besides help
	if(options.string && options.textfile) {
		console.error('too many arguments. choose either a string input or a textfile input.')
		return; //this ensures the rest of the function does not execute if there's an issue
	}

	//if the user passes a text file
	if (options.textfile !== false) {
		textInput = getTextFile(options.textfile)
	}

	//if the user passes a string
	if (options.string !== false) {
		textInput = options.string;
	}


	//set the matchday
	var matchDay = 1;
	if (textInput) {
		//parse the games
		textInput = await parseGames(textInput);
		for (i in textInput) {
			
			await createTable(matchDay); // create the table for the database if it doesn't exist			

			var team1 = textInput[i][0].team;
			var team1score = parseInt(textInput[i][0].score);
			var team2 = textInput[i][1].team;
			var team2score = parseInt(textInput[i][1].score);
			let dataset = [team1, team1score, team2, team2score];

			//check if either of the teams in the current match have played in the last match day
			var newMatchDay = await checkPreviousMatch(matchDay, team1, team2); 
			if(newMatchDay === true) {
				console.log('match!')
				matchday = matchday++;
			}

			await insertRow(matchDay, dataset);			
		}
	}

	else {
		console.log('no text input')
	}
	
	getTables();

}