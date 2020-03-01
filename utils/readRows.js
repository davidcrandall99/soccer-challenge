const sqlite3 = require('sqlite3').verbose();

let readRows = (x) => {
	let db = new sqlite3.Database('matchdays.db', (err) => {
		if (err) {
			console.error(err.message);
			return false;
		}
	});
	var xf = [];
	db.all(`SELECT * FROM Matchday${x}`, function (err, rows) {
		if (err) {
			console.log(err)
		}
		xf.push(rows)
		console.log(xf)
	});
	console.log(xf)
}

module.exports = readRows;