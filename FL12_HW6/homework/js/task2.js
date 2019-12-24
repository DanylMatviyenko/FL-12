// Your code goes here

let a = +prompt("Enter a");
let b = +prompt("Enter b");
let c = +prompt("Enter c");


if(parseInt(a) !== a || parseInt(b) !== b || parseInt(c) !== c || a <= 0 || b <= 0 || c <= 0) {
	alert("A triangle must have 3 sides with a positive definite length");
	alert("input values should be ONLY numbers");
}else if(a + b < c || a + c < b || b + c < a) {
	alert("Triangle doesn’t exist");
}else if(a === b && b === c) {
	alert("Equilateral triangle");
}else if(a === b || c === a || c === b) {
	alert("Isosceles triangle");
}else if(a !== b && c !== a && c !== b) {
	alert("Scalene triangle");
}
