/**
 * Event Listeners
 */

document.addEventListener("DOMContentLoaded", function () {
    shuffledCards();
    imageGenerator();
})

/**
 * Audio
 */

let cardSound = new Audio('./assets/sounds/card-flip.wav');
let matchSound = new Audio('./assets/sounds/match.mp3');
let winSound = new Audio('./assets/sounds/game-win.wav');

/**
 * Select Game Type - Used by the Card Grid Generator to determine the cards used
 * and by the CSS to change the layout of the grid.
 */

var easy = true;
var medium = false;
var hard = false;
var previousEasyScore = 100
var previousMediumScore = 100
var previousHardScore = 100
let hiddenScore = 0;

let easyButton = document.getElementsByClassName("easy");
easyButton[0].addEventListener("click", () => {
    easy = true;
    medium = false;
    hard = false;
    easyGame = document.getElementsByClassName("game");
    easyGame[0].classList.add("easy-game");
    easyGame[0].classList.remove("medium-game");
    easyGame[0].classList.remove("hard-game");
    levelSelect();
    hiddenScore = 0
    document.getElementById("difficulty-text").innerText = "Easy";
})
let mediumButton = document.getElementsByClassName("medium");
mediumButton[0].addEventListener("click", () => {
    medium = true;
    easy = false;
    hard = false;
    easyGame = document.getElementsByClassName("game");
    easyGame[0].classList.remove("easy-game");
    easyGame[0].classList.add("medium-game");
    easyGame[0].classList.remove("hard-game");
    levelSelect();
    hiddenScore = 0
    document.getElementById("difficulty-text").innerText = "Medium"
})
let hardButton = document.getElementsByClassName("hard");
hardButton[0].addEventListener("click", () => {
    hard = true;
    easy = false;
    medium = false;
    easyGame = document.getElementsByClassName("game");
    easyGame[0].classList.remove("easy-game");
    easyGame[0].classList.remove("medium-game");
    easyGame[0].classList.add("hard-game");
    levelSelect();
    hiddenScore = 0
    document.getElementById("difficulty-text").innerText = "Hard"
})

/**
 * Image List - An array of all the images, taken by the Shuffle Cards section before going into the game.
 */

let getImages = [{
        imgSrc: "./assets/images/fruit/apple.jpg",
        name: "apple"
    }, {
        imgSrc: "./assets/images/fruit/apple.jpg",
        name: "apple"
    },
    {
        imgSrc: "./assets/images/fruit/bananna.jpg",
        name: "bananna"
    }, {
        imgSrc: "./assets/images/fruit/bananna.jpg",
        name: "bananna"
    },
    {
        imgSrc: "./assets/images/fruit/blackberry.jpg",
        name: "blackberry"
    }, {
        imgSrc: "./assets/images/fruit/blackberry.jpg",
        name: "blackberry"
    },
    {
        imgSrc: "./assets/images/fruit/blueberries.jpg",
        name: "blueberries"
    }, {
        imgSrc: "./assets/images/fruit/blueberries.jpg",
        name: "blueberries"
    },
    {
        imgSrc: "./assets/images/fruit/cherries.jpg",
        name: "cherries"
    }, {
        imgSrc: "./assets/images/fruit/cherries.jpg",
        name: "cherries"
    },
    {
        imgSrc: "./assets/images/fruit/grapes.jpg",
        name: "grapes"
    },
    {
        imgSrc: "./assets/images/fruit/grapes.jpg",
        name: "grapes"
    },
    {
        imgSrc: "./assets/images/fruit/honeydew.jpg",
        name: "honeydew"
    }, {
        imgSrc: "./assets/images/fruit/honeydew.jpg",
        name: "honeydew"
    },
    {
        imgSrc: "./assets/images/fruit/lemon.jpg",
        name: "lemon"
    },
    {
        imgSrc: "./assets/images/fruit/lemon.jpg",
        name: "lemon"
    },
    {
        imgSrc: "./assets/images/fruit/lime.jpg",
        name: "lime"
    },
    {
        imgSrc: "./assets/images/fruit/lime.jpg",
        name: "lime"
    },
    {
        imgSrc: "./assets/images/fruit/orange.jpg",
        name: "orange"
    },
    {
        imgSrc: "./assets/images/fruit/orange.jpg",
        name: "orange"
    },
    {
        imgSrc: "./assets/images/fruit/peach.jpg",
        name: "peach"
    },
    {
        imgSrc: "./assets/images/fruit/peach.jpg",
        name: "peach"
    },
    {
        imgSrc: "./assets/images/fruit/pear.jpg",
        name: "pear"
    },
    {
        imgSrc: "./assets/images/fruit/pear.jpg",
        name: "pear"
    },
    {
        imgSrc: "./assets/images/fruit/pineapple.jpg",
        name: "pineapple"
    },
    {
        imgSrc: "./assets/images/fruit/pineapple.jpg",
        name: "pineapple"
    },
    {
        imgSrc: "./assets/images/fruit/plum.jpg",
        name: "plum"
    },
    {
        imgSrc: "./assets/images/fruit/plum.jpg",
        name: "plum"
    },
    {
        imgSrc: "./assets/images/fruit/pom.jpg",
        name: "pom"
    },
    {
        imgSrc: "./assets/images/fruit/pom.jpg",
        name: "pom"
    },
    {
        imgSrc: "./assets/images/fruit/raspberry.jpg",
        name: "raspberry"
    },
    {
        imgSrc: "./assets/images/fruit/raspberry.jpg",
        name: "raspberry"
    },
    {
        imgSrc: "./assets/images/fruit/strawberry.jpg",
        name: "strawberry"
    },
    {
        imgSrc: "./assets/images/fruit/strawberry.jpg",
        name: "strawberry"
    },
    {
        imgSrc: "./assets/images/fruit/watermelon.jpg",
        name: "watermelon"
    },
    {
        imgSrc: "./assets/images/fruit/watermelon.jpg",
        name: "watermelon"
    },

]

/**
 * Shuffle Cards - Takes the getImages array, slices it down to size depending on the difficulty and shuffles
 * those cards into the new arrayOrder which is sent to the card grid generator.
 */

let shuffledCards = () => {
    if (easy === true) {
        let arrayOrder = getImages.slice(0, 16);
        arrayOrder.sort(() => Math.random() - 0.5);
        return arrayOrder;
    } else if (medium === true) {
        let arrayOrder = getImages.slice(0, 24);
        arrayOrder.sort(() => Math.random() - 0.5);
        return arrayOrder;
    } else if (hard === true) {
        let arrayOrder = getImages.slice(0, 36);
        arrayOrder.sort(() => Math.random() - 0.5);
        return arrayOrder;
    }
}

/**
 * Generate Card Grid - Creates the cards by placing div elements into a grid, then placing
 * the front of the card as an image using the shuffled array and creates the back of the card using
 * a single image in the CSS.
 * Each card has the name of the image attached to it for checking. 
 * The card divs can be clicked on which pushes the clicked card into the numberOfCards array for checking
 * and triggers the checkForMatch function.
 * The front and the back of the cards rotate 180degrees when the card is clicked on.
 */

let imageGenerator = () => {
    let arrayOrder = shuffledCards();

    arrayOrder.forEach((element) => {
        let card = document.createElement("div");
        let picture = document.createElement("img");
        let back = document.createElement("div");

        card.classList.add("card");
        card.id = "card";
        picture.classList.add("picture");
        back.classList.add("back");

        picture.src = element.imgSrc;
        card.setAttribute("name", element.name);

        game = document.getElementsByClassName("game");
        game[0].appendChild(card);
        card.appendChild(picture);
        card.appendChild(back);

        picture.src = element.imgSrc;

        card.addEventListener("click", (names) => {
            cardSound.play();
            numberOfCards.push(element);
            console.log(numberOfCards[0]);
            console.log(numberOfCards[1]);
            card.classList.add("correct");
            card.classList.toggle("flipCard");
            checkForMatch(names);

        })
    })
};

/**
 * Compare Cards - After a card is clicked on the checkForMatch function checks if there are 2
 * cards in the numberOfCards array. 
 * If so, it then compares the names of the cards. 
 * If correct,
 * the turn counter is increased, audio signals a match to the player, a 'counter' is added to
 * an array that checks for the end of the game, the array that compares the cards is cleared and
 * two classes are changed so that the cards stay flipped over and becomes unclickable.
 * If incorrect,
 * the turn counter is increased and the cards flip back over after a short delay.
 */

let numberOfCards = []
let flipCounter = []
const checkForMatch = (names) => {

    let targetCard = names.target;
    let flipCard = document.querySelectorAll(".flipCard");

    if (numberOfCards.length === 2) {

        if (numberOfCards[0].name === numberOfCards[1].name) {
            console.log("match");
            incrementScore();
            setTimeout(() => matchSound.play(), 350);
            flipCounter.push(1);
            flipCard.forEach((card) => {
                numberOfCards = [];
                targetCard.classList.add("counter");
                card.classList.remove("flipCard");
            });
            console.log(flipCounter)
        } else {
            console.log("wrong");
            incrementScore();
            flipCard.forEach((card) => {
                setTimeout(() => card.classList.remove("flipCard"), 1000);
                setTimeout(() => card.classList.remove("correct"), 1000);
                numberOfCards = [];


            });
        }
    }
    /* Checks for if the player has won. */
    if (easy === true && flipCounter.length === 8) {
        gameWin();
    }
    if (medium === true && flipCounter.length === 12) {
        gameWin();
    }
    if (hard === true && flipCounter.length === 18) {
        gameWin();
    }
}
/**
 * Moves Counter - Increases the number of moves and inserts the number into two places on the page 
 * where it is visible to the player.
 */

 function incrementScore() {
    let totalScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++totalScore;
    ++hiddenScore;
}
/**
 * Game Win - When the if statements in the card checker trigger the gameWin, the div containing 
 * the congratulations message becomes visable and interactable.
 */

let gameWin = () => {
    winSound.play(), 1000;
    win = document.getElementsByClassName("congratulations");
    win[0].classList.toggle("congratulationsHidden");
    if (easy === true && hiddenScore < previousEasyScore) {
        previousEasyScore = hiddenScore
        document.getElementById("previous-score").innerText = previousEasyScore;
    }
    if (medium === true && hiddenScore < previousMediumScore) {
        previousEasyScore = hiddenScore
        document.getElementById("previous-score").innerText = previousEasyScore;
    }
    if (hard === true && hiddenScore < previousHardScore) {
        previousEasyScore = hiddenScore
        document.getElementById("previous-score").innerText = previousEasyScore;
    }
    console.log("Win!");
}

/**
 * Restart Buttons - The "Play Again?" button and difficulty buttons are both used to state the game over.
 * The difficulty buttons are kept seperate so as not to trigger the classlist.toggle which would
 * otherwise make the Congratulations message appear on the screen.
 */

let button = document.getElementsByClassName("restart");
button[0].addEventListener("click", function () {
    restart();
})

let restart = () => {
    win[0].classList.toggle("congratulationsHidden");
    const elements = document.getElementsByClassName("card");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    shuffledCards();
    imageGenerator();
    flipCounter = [];
    hiddenScore = 0
    document.getElementById("score").innerText = 0
}

let levelSelect = () => {
    const elements = document.getElementsByClassName("card");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    shuffledCards();
    imageGenerator();
    flipCounter = [];
    document.getElementById("score").innerText = 0;
}

