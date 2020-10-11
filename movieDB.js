var movies = [
{
	name: "In Bruges",
	rating: 5,
	hasWatched: true
},
{
	name: "Frozen",
	rating: 4.5,
	hasWatched: false
},
{
	name: "Mad Max Fury Road",
	rating: 5,
	hasWatched: true
},
{
	name: "Les Miserables",
	rating: 3.5,
	hasWatched: false
}
];

movies.forEach(function(element) {
	var result = "You have";
	if (element.hasWatched) {
		result += " watched ";
	}
	else {
		result += " not seen ";
	}
	result += element.name + " ";
	result += element.rating;
	console.log(result);
}
)
