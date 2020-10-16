// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// the lexical scope of variables defined in higher order functions extend into lower order functions, because when the lower order function
// does not have his needs satisfied, he looks outside of himself, and in this instance, in the higher order function, he found his closure.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number.
 For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

 const summation = function(num){
   let x = 0;
   console.log(x);
  for(let i = 1; i <= num; i++){
    x += i;
    console.log(x);
  }
 }
 summation(4);