console.log('****** printReverse ********');

printReverse([ 1, 2, 3, 4 ]);

printReverse([ 'a', 'b', 'c', 'd' ]);

console.log('******* isUniform *******');
isUniform([ 1, 1, 1, 1 ]);

isUniform([ 2, 1, 1, 1 ]);

isUniform([ 'a', 'b', 'p' ]);

isUniform([ 'b', 'b', 'b' ]);

console.log('******* sumArray *******');
sumArray([ 1, 2, 3 ]);

sumArray([ 10, 3, 10, 4 ]);

sumArray([ -5, 100 ]);

console.log('******* maxArray *******');
max([ 1, 2, 3 ]);

max([ 10, 3, 10, 4 ]);

max([ -5, 100 ]);

function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	var firstElement = arr[0];
	var result = true;
	for (var i = 0; i <= arr.length - 1; i++) {
		if (arr[i] !== firstElement) {
			result = false;
		}
	}
	console.log(arr + ' ' + result);
}

function sumArray(arr) {
	var sumResult = 0;
	arr.forEach(function(element) {
		sumResult += element;
	});
	console.log(sumResult);
}

function max(arr) {
	var maxResult = arr[0];
	arr.forEach(function(element) {
		if (maxResult < element) {
			maxResult = element;
		}
	});
	console.log(maxResult);
}
