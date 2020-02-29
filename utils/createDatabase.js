// TO DO: Write code to generate a sqlite database
const fs = require('fs');

let createDatabase = () => {
	fs.writeFileSync('./../database/matchdays.db', (data, err)=> {
		console.log(data);
		console.error(err);
	});
}

module.exports = createDatabase