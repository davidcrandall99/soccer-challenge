// TO DO: Write code to generate a sqlite database
const fs = require('fs');

let createDatabase = () => {
	try {
		fs.writeFileSync('matchdays.db','');
	} catch(err) {
		console.error('ERROR', err);
		return false;
	}
	return true;
}
createDatabase();
module.exports = createDatabase