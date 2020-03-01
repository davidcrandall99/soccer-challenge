const sqlite3 = require('sqlite3').verbose();


let insertRow = (matchDay, data) => {
	let db = new sqlite3.Database('matchdays.db', (err) => {
		if (err) {
			console.error(err);
			return false;
		}
	});
	db.run(`INSERT INTO Matchday${matchDay}('team1name', 'team1score', 'team2name', 'team2score') VALUES (?,?,?,?)`, data, err=>{
		if(err) {
			console.log(err);
		}
	});
	db.close();
	// console.log(data)
}

module.exports = insertRow;