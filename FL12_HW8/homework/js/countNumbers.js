const makeNumber = function (str) {
	let numb = '';
	for(let i = 0; i < str.length; i++) {
		if (!isNaN(+str[i])) {
			numb = numb + str[i];
		}
	}

	return numb;
};

const countNumbers = function (str) {
	let counter = 0;
	let numList = {};
	let numString = makeNumber(str);
	for(let i = 0; i < numString.length; i++) {
		for(let k = 0; k < numString.length; k++) {
			if(+numString[i] === +numString[k]) {
				counter++;
			}
		}
		numList[numString[i]] = counter;
		counter = 0; 
	}

	return numList;
};


countNumbers('jdjjka000466588kkkfs662555');

