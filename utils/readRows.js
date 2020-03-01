const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('matchdays.db', (err) => {
	if (err) {
		console.error(err.message);
		return false;
	}
});
var xf = [];

let readRows = async (x, callback) => {
	try {
		await db.all(`SELECT * FROM Matchday${x}`, function (err, rows) {
			if (err) {
				console.log(err)
			}
			// console.log(rows)
		});
	} catch (e) {
		return 'fuck';
	}
}
module.exports = readRows;