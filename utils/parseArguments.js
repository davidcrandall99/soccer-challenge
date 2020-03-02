import arg from 'arg';
let parseArguments = (rawArgs) => {
	//setup some basic args to pass
	// this will include strings of text, as well as text files
	const args = arg(
		{
			'--filepath': String,
			'--string': String,
			'-f': '--filepath',
			'-s': '--string',
			'--help': Boolean,
			'-h': '--help'
		},
		{
			argv: rawArgs.slice(2),
		}
	);
	return {
		textfile: args['--filepath'] || false,
		string:  args['--string'] || false,
		help: args['--help'] || false
	};
}

module.exports = parseArguments;