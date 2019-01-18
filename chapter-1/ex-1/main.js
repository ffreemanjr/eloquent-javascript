//While Loop
let triangle = "#";
let counter = 0;
while (counter < 7) {
  console.log(triangle);
  triangle = triangle + "#";
  counter++;
  
}

console.log("=========================================");
console.log("");

//For Loop
let myHash = "#"
for (let counter = 0; counter < 7 ; counter++) {
  console.log(myHash);
  myHash = myHash + "#";
}
console.log("=========================================");
console.log("");

// Or, it can be done as below:
for (let myHash = "#"; myHash.length < 8; myHash += "#") {
  console.log(myHash);
}