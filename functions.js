// long version with if
// function isEven(X) {
// 	if (x % 2 === 0) {
// 		let isEvenResult = True;
// 	}
// else
// {
// 	isEvenResult = False;
// }
// return isEvenResult;
// }
// short version with boolean
var num = isEven(4);

function isEven(x) {
	return x % 2 === 0;
}

var num = 4;

function factorial(num) {
var result = 1;
for (var i = 2; i <= num; i++) {
result *= i;
}
return result;
}

function kababToSnake(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr;
}