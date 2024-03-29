const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO ERRROR!!!");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

const amedeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
});
amedeus.save();

Movie.insertMany([
  { title: "Amelies", year: 2001, score: 8.3, rating: "R" },
  { title: "Alien", year: 1979, score: 8.1, rating: "R" },
  { title: "The Iron Giant", year: 1989, score: 7.5, rating: "PG" },
  { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
  { title: "Moonrise Kingdome", year: 2012, score: 7.3, rating: "PG-13" },
]).then((data) => {
  console.log("It Worked!!");
  console.log(data);
});
