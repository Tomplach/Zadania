function zeros(number) {
		let string = String(number);
		while (string.length < 3) {
    		string = "0" + string;
    }
    return string;
}

function animalsOnFarm(cows, horses, turtles) {
		console.log(zeros(cows) + " - Cow(s) on farm");
    console.log(zeros(horses) + " - Horse(s) on farm");
    console.log(zeros(turtles) + " - Turtle(s) on farm");
}
