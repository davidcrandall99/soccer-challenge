/** 
 * TO DO:
 * Write function that accepts array of game data [team, score, team, score], checks if either team is in the most recent match set. If it exists, returns 'true', otherwise, it returns 'false'
 * If there's no table inside the database, it will return 'false
 * **/

const sqlite3 = require('sqlite3').verbose();
const readRows = require('./readRows');

let isInMatchday = (matchDay, team1, team2) => {
	let db = new sqlite3.Database('matchdays.db', (err) => {
		if (err) {
			console.error(err);
			return false;
		}
	});
	let rows = readRows(matchDay);
	
	for (i in rows) {

		if(rows[i].indexOf(team1) > -1 || rows[i].indexOf(team2) > -1) {
			return true;
		}

	}
	return false;

}

module.exports = isInMatchday;
