let number = 1;

while (number < 101) {
  if (number % 3 == 0 && number % 5 !=0) {
    console.log('Fizz');
  }
  else if (number % 5 == 0 && number % 3 !=0) {
    console.log('Buzz');
  }
  else if (number % 3 == 0 && number % 5 == 0) {
    console.log('Fizzbuzz');
  }
  else {
    console.log(number);
  }
  number++;
}




