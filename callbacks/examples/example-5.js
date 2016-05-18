// Example 5
function announce() { 
    console.log('Ding!'); 
}

var fourSecondTimeout = setTimeout (announce, 4000);
clearTimeout(fourSecondTimeout);

clearInterval(threeSecondInterval);
clearInterval(fiveSecondInterval);
