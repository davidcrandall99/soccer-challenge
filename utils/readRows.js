const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('matchdays.db', (err) => {
	if (err) {
		console.error(err.message);
		return false;
	}
});


let readRows = async (x, callback) => {
	try {
		return await db.all(`SELECT * FROM Matchday${x}`, function (err, rows) {
			if (err) {
				console.log(err)
			}
			callback(rows)
		});
	} catch (e) {
		console.log(e);
		return false;
	}
}
module.exports = readRows;