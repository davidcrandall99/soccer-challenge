const createTable = require('./utils/createTable')
const createDatabase = require('./utils/createTable');
const getTextFile = require('./utils/getTextFile')
const parseGames = require('./utils/parseGames')
const parseArguments = require('./utils/parseArguments')


export function cli(args) {
	let options = parseArguments(args);
	var textInput;
	//if the user asks for help
	if (options.help === true) {
		console.info('Sample help text')
		return;
	}
	//if the user passes a text file
	if (options.textfile !== false) {
		textInput = getTextFile(options.textfile)
	}
	if (options.string !== false) {
		textInput = options.string;
	}
	console.log(textInput)
}