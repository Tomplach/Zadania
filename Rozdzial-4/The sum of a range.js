function range(start, end, jump = start < end ? 1 : -1) {
	let array = [];
  
	if (start < end && jump < 0) {
  		return "You can not use a negative number (" + jump + ") to achieve an array with numbers from " + start + " to " + end;
 	} else if (start > end && jump > 0) {
  		return "You can not use a positive number (" + jump + ") to achieve an array with numbers from " + start + " to " + end;
  	}
  
	if (jump > 0) {
		for (let i = start; i <= end; i += jump)
  		array.push(i);
  	} else {
 		for (let i = start; i >= end; i += jump)
		array.push(i);
 	}
	return array;
}

function sum(array) {
	let sumNum = 0;
 	for (let i of array) {
  	sumNum += i;
	}
 	return sumNum;
}
