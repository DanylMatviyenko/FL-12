const isLeapYear = function (date) {
	let year = new Date(date).getFullYear();
	if (isNaN(year)) {
		return 'Invalid Date';
	}else {
		if (year % 100 === 0 && year % 400 !== 0 || year % 4 !== 0) {
			return year + ' is not a leap year';
		} else {
			return year + ' is a leap year';
		}
	}
};

isLeapYear('2020-01-01 00:00:00');
