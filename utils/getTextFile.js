let getFile = (x) => {
	//placing this in a try catch; if the data is not found for some reason, we should catch the error and handle it.
	try {
	  return fs.readFileSync(x, "utf8");
	} catch (e) {
	  return false;
	}
 };
 
