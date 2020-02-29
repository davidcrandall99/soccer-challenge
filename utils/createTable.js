/** 

TO DO: write function that creates a table inside our database

**/
const sqlite3 = require('sqlite3').verbose();

let createTable = (x) => {
	x = parseInt(x) || 1;
	let db = new sqlite3.Database('../matchdays.db', (err) => {
		if (err) {
		console.error(err.message);
		return false;
		}
	});
	db.exec(`CREATE TABLE "Matchday ${x}"(team1name STRING team1score INTEGER team2name STRING team2score INTEGER)`, err => {
		console.log(err);
	});

	db.close();
}

module.exports = createTable;