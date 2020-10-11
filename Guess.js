//get secret number
var secretNumber = 4;

//users guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess)

//check guess is right
if (guess === secretNumber) {
	alert("Yep thats right");
}
else if  (guess > secretNumber)
{
	alert("too high");
}
else {
	alert("too low");
}
	

