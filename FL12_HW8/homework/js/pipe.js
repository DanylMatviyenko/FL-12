function addOne(x) {
  return x + 1;
}
const pipe = function (num) {
	for(let i = 1; i < arguments.length; i++) {
		num = arguments[i](num);
	}
	return num;
};

pipe(1, addOne, addOne);

