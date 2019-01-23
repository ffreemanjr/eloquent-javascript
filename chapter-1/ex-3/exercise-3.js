// Declare variables 
let grid = " ";
let size  = 8;

/* 
The first "for loop" controls the line. That is everything inside the yellow braces. The second "for loop" controls the adding of the characters for each line. That is all the code between the blue braces.
*/
for (let outer = 0; outer < size; outer++) {
  for (let inner = 0; inner < size; inner ++) {

    // This will test if the counters are even. If they are, then add a space. If not, add a hash.
    if ((outer + inner) % 2 == 0) {
      grid = grid + " ";
    } else {
      grid = grid + "#";
    }
  }
  
  // This will move to the next line when the current line is completed.
  grid = grid + "\n";
}

console.log(grid);
