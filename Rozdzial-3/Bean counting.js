function countChar(string, b) {
		let counted = 0;
		for (let c = 0; c < string.length; c++ ) {
    		if (string[c] == b) {
        		counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
		return countChar(string, "B");
}
