// Exercise 3: Javascript Functions are First Class

// Here is example code from the lesson.

// Example 7

function countWhereTrue (numbers, predicate) {
    var i;
    var count = 0;
    for (i = 0; i < numbers.length; i++) {
        if (predicate(numbers[i])) {
            count++;
        }
    }
    return count;
}

function isOdd(number) {
    return (number % 2) === 1;
}

// And here is some code to test that the code above works correctly.

var inputNumbers = [3, 1, 6, 2, 4, 9, 7, 5];

if (countWhereTrue(inputNumbers, isOdd) === 5) {
  console.log('isOdd predicate works correctly');
} else {
  console.log('isOdd predicate does not work correctly');
}

// Helper function to check for array equality
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

// Modify the code below so that instead of returning the count of items
// matching the predicate, it returns an array of them.

function listWhereTrue (numbers, predicate) {

  // TODO: your code here
  return undefined;
}

var listResult = listWhereTrue(inputNumbers, isOdd);

if (arraysEqual(listResult, [3, 1, 9, 7, 5])) {
  console.log('isOdd predicate works correctly');
} else {
  console.log('isOdd predicate does not work correctly');
}



