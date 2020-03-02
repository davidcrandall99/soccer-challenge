/** 

TO DO: write function that creates a table inside our database

**/
const sqlite3 = require('sqlite3').verbose();

//x = the matchday
let createTable = (x) => {
	x = parseInt(x) || 1;
	let db = new sqlite3.Database('matchdays.db', (err) => {
		if (err) {
		console.error(err);
		return false;
		}
	});
	db.exec(`CREATE TABLE IF NOT EXISTS Matchday1(id INTEGER PRIMARY KEY AUTOINCREMENT, team1name TEXT, team1score INTEGER, team2name TEXT, team2score INTEGER)`, err => {
		if(err){
			db.close();
			return false;
		}
	});
	db.close();
	return true;
}
module.exports = createTable;