const getMin = function () {
	let min = +Infinity;

	for(let i = 0; i < arguments.length; i++) {
		if (min > arguments[i]) {
			min = arguments[i];
		}
	}

	return min;
};

getMin(3, 0, -3, -10, 15, -20, 154);