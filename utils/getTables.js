const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('matchdays.db', (err) => {
	if (err) {
		console.error(err);
		return false;
	}
});

db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, data) => {
	return data;
});


let callBackFunction = (data) => {
	console.log(data);
}

let getTables = () => {

}



//getTables(callback)

module.exports = getTables;