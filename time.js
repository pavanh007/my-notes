/*
 //* setTimeout, setInterval, clearTimeout, clearInterval
*/
// * setTimeout

let timeOut  = setTimeout(function () {
  console.log("This is from setTimeout");
}, 1000);

// ! this one clear the excution of setTimeout code block
// clearTimeout(timeOut);


// * setInterval

let count = 0;
let timeInterval = setInterval(function () {
  console.log(` Every ${count++}`);
}, 1000);

// ! this one clear the excution of setTimeout code block
// clearInterval(timeInterval);


// * setImmediate = main advantages of this function is to allow the execution of the sync function

console.log("before setImmediate...");
setImmediate(() => {
  console.log("This is from setImmediate function");
})
console.log("After setImmediate...");
