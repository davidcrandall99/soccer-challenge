import arg from 'arg';

function parseArgs(rawArgs) {
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
		games: args['--filepath'] || args['--string'] || null
	};
}


export function cli(args) {
	let options = parseArgs(args);
	console.log("It works motherfucker:");
	console.log(options);
}