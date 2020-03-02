/** 
 * TO DO:
 * Write function that accepts array of game data [team, score, team, score], checks if either team is in the most recent match set. If it exists, returns 'true', otherwise, it returns 'false'
 * If there's no table inside the database, it will return 'false
 * **/

const sqlite3 = require('sqlite3').verbose();
const readRows = require('./readRows');

let isInMatchday = async (matchDay, team1, team2) => {
	var final;
	let callBackFunction = (x) => {
		return x;
	}
	await readRows(matchDay, callBackFunction);
	console.log(final)
	// for (i in rows) {

	// 	if(rows[i].indexOf(team1) > -1 || rows[i].indexOf(team2) > -1) {
	// 		return true;
	// 	}

	// }
	// return false;

}

module.exports = isInMatchday;
