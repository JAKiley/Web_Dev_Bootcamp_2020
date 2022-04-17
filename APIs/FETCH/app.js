// THESE REQUESTS ARE DONE IN SERIES
// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.name, data.height);
//     // SECOND REQUEST
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("RESOLVED SECOND REQUEST!!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.name, data.height);
//   })
//   // ANY ERRORS
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// REQUESTS WITH ASYNC FUNCTION
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    console.log(data.name, data.height);
    // SECOND REQUEST
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
    console.log(data2.name, data2.height);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

loadStarWarsPeople();
