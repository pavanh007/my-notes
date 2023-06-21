//TODO this is all about Promises


function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}


let start = Date.now();
fetchData("https://dog.ceo/api/breeds/image/random")
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");

// * promises chaining 

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      }
    }).catch(error => {
      console.log();
      console.log(error)
    })
}

loadJson('https://javascript.info/no-such-user.json');
