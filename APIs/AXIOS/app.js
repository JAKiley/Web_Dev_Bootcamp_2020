// makes request and parses json in one step
// axios.  Since using CDN do not need NODE

//   .then((res) => {
//     console.log("RESPONSE", res);
//   })
//   .catch((e) => {
//     console.log("ERROR", e);
//   });

// REQUESTS WITH ASYNC FUNCTION
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
    console.log(res.data.name, res.data.height);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

getStarWarsPerson(1);
getStarWarsPerson(2);
