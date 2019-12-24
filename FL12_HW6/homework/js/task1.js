// Your code goes here
let a = prompt('Enter a');
let b = prompt('Enter b');
let c = prompt('Enter c');

let discr = b * b- 4 *( a * c);


if (discr > 0) {
	let value1 = (-b - Math.sqrt(discr)) / (2 * a);
	let value2 = (-b + Math.sqrt(discr)) / (2 * a);

	
	console.log('x1 ='+value1+'and x2 ='+value2); 
}else if (discr === 0) {
	let value = -b / (2 * a);
	console.log("x = " + value);
}else if (discr < 0) {
	console.log("no solution");
}else {
	console.log("Invalid input data");
}