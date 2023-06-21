/*
// * fetch is used to do the network call.
*/

let res = await fetch("https://dog.ceo/api/breeds/image/random"
  // , {
  // method: "GET",
  // headers: {
  //   "Content-Type": "application/json;charset=utf-8",
  // },
// }
).then(data => {
  console.log(data);
})

