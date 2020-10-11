var button = document.querySelector("button");

// Option 1 - Long way
// var isPurple = false;

// button.addEventListener("click", function() {
// 	if (isPurple) {
// 		document.body.style.background = "white";
//         isPurple = false;

// 	} else {
// 		document.body.style.background = "purple";
// 		isPurple = true;
// 	}
// });

// Option 2 - short way
// var isPurple = false;

// button.addEventListener("click", function() {
// 	if (isPurple) {
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "purple";
// 	}

// 	isPurple = !isPurple;
// });

// Option 3 - shorter way
button.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});
