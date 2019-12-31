const makeNumber = function (str) {
	let numb = '';
	for(let i = 0; i < str.length; i++) {
		if (!isNaN(+str[i])) {
			numb = numb + str[i];
		}
	}

	return numb;
};


makeNumber('ijifjgdj');