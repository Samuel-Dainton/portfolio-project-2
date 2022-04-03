/**
 * Event Listeners
 */
document.addEventListener("DOMContentLoaded", function () {
    shuffledCards();
    imageGenerator();
})
let cardSound = new Audio('./assets/sounds/card-flip.wav');
let matchSound = new Audio('./assets/sounds/match.mp3');
let winSound = new Audio('./assets/sounds/game-win.wav');

/**
 * Select Game Type
 */
var easy = true;
var medium = false;
var hard = false;
let easyButton = document.getElementsByClassName("easy")
easyButton[0].addEventListener("click", () => {
    easy = true
    medium = false
    hard = false
})
let mediumButton = document.getElementsByClassName("medium")
mediumButton[0].addEventListener("click", () => {
    medium = true
    easy = false
    hard = false
})
let hardButton = document.getElementsByClassName("hard")
hardButton[0].addEventListener("click", () => {
    hard = true
    easy = false
    medium = false
    console.log(easy)
    console.log(medium)
    console.log(hard)
})
/**
 * Get Cards
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
    }
]
/**
 * Shuffle Cards
 */
let shuffledCards = () => {
    if (easy === true) {
        let arrayOrder = getImages;
        arrayOrder.sort(() => Math.random() - 0.5);
        return arrayOrder;
    }
}

/**
 * Generate Card Grid
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
            numberOfCards.push(element)
            console.log(numberOfCards[0])
            console.log(numberOfCards[1])
            card.classList.add("correct");
            card.classList.toggle("flipCard");
            checkForMatch(names);

        })
    })
};

/**
 * Compare Cards
 */
let numberOfCards = []
let flipCounter = []
const checkForMatch = (names) => {

    let targetCard = names.target;
    let flipCard = document.querySelectorAll(".flipCard")

    if (numberOfCards.length === 2) {

        if (numberOfCards[0].name === numberOfCards[1].name) {
            console.log("match");
            incrementScore();
            setTimeout(() => matchSound.play(), 350);
            flipCounter.push(1);
            flipCard.forEach((card) => {
                numberOfCards = [];
                targetCard.classList.add("counter");
                card.classList.remove("flipCard")
            });
            console.log(flipCounter)
        } else {
            console.log("wrong")
            incrementScore();
            flipCard.forEach((card) => {
                setTimeout(() => card.classList.remove("flipCard"), 1000);
                setTimeout(() => card.classList.remove("correct"), 1000);
                numberOfCards = [];


            });
        }
    }
    if (flipCounter.length === 8) {
        gameWin();
    }
}

let gameWin = () => {
    setTimeout(() => winSound.play(), 1000);
    win = document.getElementsByClassName("congratulations");
    win[0].classList.toggle("congratulationsHidden");
    console.log("Win!");
}

let button = document.getElementsByClassName("restart")
button[0].addEventListener("click", function () {
    restart()
})

let restart = () => {
    win[0].classList.toggle("congratulationsHidden");
    const elements = document.getElementsByClassName("card");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    shuffledCards();
    imageGenerator();
    flipCounter = [0]
    document.getElementById("score").innerText = 0
}

/**
 * Count Guesses
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}
/**
 * Congratulations
 */