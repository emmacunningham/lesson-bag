// Example 6

function countOdds (numbers) {
    var i;
    var count = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] %2 === 1) {
            count++;
        }
    }
    return count;
}

var inputNumbers = [1, 5, 7, 2, 8, 6, 9, 3];
countOdds(inputNumbers);
