// Task 1
function convert() {
	let arr = [];
	for(let value of arguments) {
		if(typeof value === 'string') {
			arr.push(parseInt(value));
		}else {
			arr.push('' + value);
		}
	}
	return arr;
}
//Task 2
function executeforEach(arr, func) {
	for(let element of arr) {
		func(element);
	}
}
//Task 3
function mapArray (arr, callback) {
	let result = [];
	executeforEach(arr, function(el) {
		result.push(callback(+el));
	});
	return result;
}
//Task 4
function filterArray (arr, callback) {
	let result = [];
	executeforEach(arr, function(el) {
		if (callback(el)) {
			result.push(el);
		}
	});
	return result;
}
//Task 5
function flipOver(str) {
	let result = '';
	for(let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

//Task 6
function makeListFromRange(arr) {
	let result = [];
	for(let i = arr[0]; i <= arr[1]; i++) {
		result.push(i);
	}
	return result;
}
//Task 7

function getArrayOfKeys(arrObj, key) {
	let result = [];
	executeforEach(arrObj, function(obj) {
			if(obj[key]) {
				result.push(obj[key]);
			}
	});
	return result;
}
//Task 8
function substitute(arr) {
	return mapArray(arr, function(el) {
		if (el < 30) {
			return '*';
		}
		return el;
	});
}
// Task 9
function getPastDay(date, days) {
	const DAY_MS = 86400000;
	return new Date(date - days * DAY_MS).getDate();
}
//Task 10
function formatDate(date) {
	return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}