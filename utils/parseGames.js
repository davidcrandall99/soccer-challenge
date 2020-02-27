let parseMatches = x => {

	if (!x || x === false) {
	  return false;
	}
 
	//* seperate each game into an item in 'matches'
	let matches = x.split(/\n/);
	matches.pop(""); //remove empty line
 
	//* seperate each game in the match, and the score, trim the fuzz
	for (var i = 0; i in matches; i++) {
	  matches[i] = matches[i].split(/(, )/).map(item => {
		 return item.trim();
	  });
	}
 
	//*remove the comma
	for (var i = 0; i in matches; i++) {
	  if (matches[i].includes(",")) {
		 matches[i].splice(matches[i].indexOf(","), 1);
	  }
	}
	 //split each team up with their score
	 for (var i = 0; i in matches; i++) {
		for (team in matches[i]) {
		  matches[i][team] = matches[i][team].split(/(\d+)/g).map(item => {
			 return item.trim();
		  });
  
		  if (matches[i][team].includes("")) {
			 matches[i][team].splice(matches[i][team].indexOf(""));
		  }
		}
	 }
	return matches;
}