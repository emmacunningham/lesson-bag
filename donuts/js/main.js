var numFruits = 10;
var points = 0;

var cherry = {
    "source": "https://www.emojibase.com/resources/img/emojis/apple/x1f352.png.pagespeed.ic.-ZRiMmAyar.png",
    "points": 5
}

var grapes = {
    "source": "https://www.emojibase.com/resources/img/emojis/apple/1f347.png",
    "points": 10
}

var watermelon = {
    "source": "https://www.emojibase.com/resources/img/emojis/apple/1f349.png",
    "points": 20

}

var pineapple = {
    "source": "https://www.emojibase.com/resources/img/emojis/apple/x1f34d.png.pagespeed.ic.8rtDbOLo72.png",
    "points": 50
}

var fruits = [cherry, grapes, watermelon, pineapple];

$(".start-game").click(startGame);

function startGame() {
    // Add fruits
    addFruits(numFruits);

    // Start timer

}

function addFruits(num) {
    while (num > 0) {
        var index = getRandomInt(0, fruits.length - 1);
        var fruit = fruits[index];
        makeFruit(fruit);


        num--;
    }
}

function makeFruit(fruit) {
    var fruitImage = fruit["source"];
    var fruitPoints = fruit["points"];

    // Add fruit element
    var fruitElement = $("<img class='fruit' />");

    // Add image source
    fruitElement.attr("src", fruitImage);

    // Add points to fruit
    fruitElement.attr("data-points", fruitPoints);

    // Get random x position
    var xPos = getRandomInt(0, 570);

    fruitElement.css("left", xPos + "px");

    // Position at top of screen
    var yPos = -100;

    fruitElement.css("top", yPos + "px")

    // Get random animation interval
    var speed = getRandomInt(5000, 10000);

    // Get new random fruit
    var index = getRandomInt(0, fruits.length - 1);
    var newFruit = fruits[index];

    // Start animation
    fruitElement.animate({"top": "430px"}, speed, "swing", function() {
        fruitElement.remove();
        makeFruit(newFruit);
    });

    // Add fruit
    $(".game-container").append(fruitElement);

    // Add click listener for fruits
    fruitElement.click(fruitClick);

    function fruitClick() {
        var fruitPoints = Number($(this).attr("data-points"));
        console.log(fruitPoints);
        points = points + fruitPoints;
        $(".points-text").text(points);
        $(this).remove();
    }

}

// Generates random number from range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

