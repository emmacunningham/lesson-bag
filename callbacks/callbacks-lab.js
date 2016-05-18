// Quiz: Javascript Functions are First Class

// Question 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.

// TODO: Find the bug and fix it.

function writeDing() {
  console.log('Ding!');
}

var dingHandle = setTimeout (writeDing(), 3000);

// Question 2

// Javascript has a built-in sort function, but you need to tell it how to
// compare the things you want to sort.
//
// You do this by passing it a function that takes two arguments,
// which we'll call A and B.
//
// This function should return
//   -1 if A should come before B,
//   0 if they compare equal,
//   and 1 if B should come before A.
//
// Write a function according to this specification so that the following code
// sorts the words from shortest to longest.
//
// Remember that if x is a variable containing a string, you can find its
// length with the expression x.length.

var words = ['short', 'medium', 'long', 'interminable', 'lengthy'];

var byLength = function (A, B) {
  // TODO: your code here
};

var sortedWords = words.sort(byLength);

// When you correctly fill in the code for the byLength() function
// the test below will verify your solution.

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

if (arraysEqual(sortedWords, ['long', 'short', 'medium', 'lengthy', 'interminable'])) {
  console.log("Answer to question 2 is correct");
} else {
  console.log("Answer to question 2 isn't correct yet.");
}

// Question 3
//
// What change would you make to your comparison function so that it will sort
// the words from longest to shortest?  Write it as an anomymous function.

var sortedWordsReverse = words.sort(function (A, B){
  // TODO: your code here
});

// When you correctly fill in the code for the sortedWords() function
// the test below will verify your solution.
if (arraysEqual(sortedWordsReverse, ['interminable', 'lengthy', 'medium', 'short', 'long'])) {
  console.log("Answer to question 3 is correct");
} else {
  console.log("Answer to question 3 isn't correct yet.");
}

// Question 4

// You have the following code to calculate the nth power of a number m:

function power(m, n) {
  var result = 1;

  for (var i = 1; i < n; i++) {
    result *= m;
  }

  return result;
}

// Write a function generator called makePower based on this code so
// that the following code works.  The function you return should take
// a number as an argument and return that number raised to the power
// you specified in the makePower call.

function makePower(power) {
  // TODO: your code here
}

var power2 = makePower(2);
var power3 = makePower(3);

// When you correctly fill in the code for the makePower() function
// the test below will verify your solution.
if (power2 !== undefined && power2(4) === 16) {
  console.log("Answer to question 4 is correct");
}
else {
  console.log("Answer to question 4 isn't correct yet.");
}

if (power3 !== undefined && power3(3) === 27) {
  console.log("Answer to question 4 is correct");
}
else {
  console.log("Answer to question 4 isn't correct yet.");
}




