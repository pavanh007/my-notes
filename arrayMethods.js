const arr = ["a", "b", "c", "d", "e", "f"];
arr.push("g");
arr.pop();
arr.shift();
arr.unshift("-a");

arr.splice(0, 1, "ab", "bc");
const arr2 = arr.slice(-3);
console.log(arr2);
console.log(arr);

const val = arr.concat(["g", "h"]);
const val2 = arr.concat(["g", "h"], "i");
console.log(val2);
console.log(val);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

const arr3 = ["a", "b", "c", "d", "e", "f", "g", "f"];
console.log([...new Set(arr3)]);
console.log(arr);
console.log(arr.indexOf("bc"));
console.log(arr.includes("ab", 0));
arr.find((a) => {
  console.log(a);
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let num = numbers.filter((item) => item % 2 === 0);
console.log(num);
numbers.map((a) => {
  console.log(a * 2);
});

let numb = [1, 8, 3, 4, 2, 6, 7, 5];
let sorted = numb.sort();
console.log(sorted);

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let check = [1, 2, 15];

console.log(check.sort(compareNumeric));

console.log("pavan:h:hirenellur".split(":"));
console.log(check.reduce((sum, current) => sum + current, 0));
console.log(check.reverse());
console.log(check.fill(0, 2));
