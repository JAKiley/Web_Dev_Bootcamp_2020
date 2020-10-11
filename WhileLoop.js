console.log('Print all Numbers between -10 and 19');
let count = -10;
while(count <= 19) {
	console.log(count);
	count++;
}
console.log("Print all even numbers between 10 and 40");
let countEven = 10;
while(countEven <= 40) {
	if (countEven % 2 === 0) {
	console.log(countEven);}
	countEven++;
}
console.log("Print all odd numbers between 300 and 333");
let countOdd = 300;
while(countOdd <= 333) {
	if (countOdd % 2 !=== 0) {
	console.log(countOdd);}
	countOdd++;
}
console.log("Print all numbers divisiible by 5 AND 3 between 5 and 50");
let countDiv = 5;
while(countDiv <= 50) {
	if (countDiv % 5 === 0 && countDiv % 3 === 0) {
	console.log(countDiv);}
	countDiv++;
}
