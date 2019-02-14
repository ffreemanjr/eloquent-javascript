// Nested Scope
const humus = function(factor) {
    console.log('Below is the ingredient to make humus' + "\n" + '=============================================');
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

humus(10);

console.log("================================================");


/* Practicing recursion. */
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }else {
    return base * power(base, exponent-1);
  }
}
console.log(" ");
console.log("Topic: RECURSION - A function that calls itself ");
console.log(" This is written as 2 to the power of 3-1");
console.log(power(2,3)); //This is written as 2 to the power of 3-1
console.log("================================================");
console.log('');


/* More recursion by trying to find a sequence */
console.log("Puzzle: Starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?");

console.log(' ');
console.log("For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all."); 

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `()${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(101));
console.log('');
console.log("================================================");
console.log('');

/* Growing Functions */
console.log('We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.');

console.log(' ');
console.log('007 Cows\n011 Chickens\n\n');
console.log('This asks for a function of two arguments—the number of cows and the number of chickens. Let’s get coding.');
