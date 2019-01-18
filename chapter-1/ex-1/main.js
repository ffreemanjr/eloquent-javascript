//While Loop
let triangle = "#";
let counter = 0;
while (counter < 7) {
  triangle = triangle + "#";
  counter++;
  console.log(triangle);
}

console.log("=========================================");
console.log("");

//Do While Loop
let doTriangle = "#";
let count = 0;
do {
  console.log(doTriangle);
} while (count < 8) {
    doTriangle = doTriangle + "#";
    count++;
    console.log(doTriangle);
  }

console.log("=========================================");
console.log("");

//For Loop
let myHash = "#"
for (let counter = 0; counter < 7; counter++) {
  myHash = myHash + "#";
  console.log(myHash);
}
console.log(myHash)