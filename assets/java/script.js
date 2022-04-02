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
    let arrayOrder = getImages;
    arrayOrder.sort(() => Math.random() - 0.5);
    return arrayOrder;
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
            card.style.pointerEvents = "none"
            setTimeout(() => card.style.pointerEvents = "auto", 2500);
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
let lockCards = document.getElementsByClassName("card")
console.log(lockCards)
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
                card.style.pointerEvents = "none";
                card.classList.add("correct");
                numberOfCards = [];
                targetCard.classList.add("counter");


            });
            console.log(flipCounter)
        } else {
            console.log("wrong")
            incrementScore();
            flipCard.forEach((card) => {
                setTimeout(() => card.classList.remove("flipCard"), 2000);
                numberOfCards = [];


            });
        }
    }
    if (flipCounter.length === 8) {
        gameWin();
    }
}
let gameWin = () => {
    setTimeout(() => winSound.play(), 2000);
    win = document.getElementsByClassName("congratulations");
    win[0].classList.toggle("congratulationsHidden");
    console.log("Win!");
}

let button = document.getElementsByTagName("button")
button[0].addEventListener("click", function () {
    restart()
})

let restart = () => {
    win[0].classList.toggle("congratulationsHidden");
    const elements = document.getElementsByClassName("card");
    while(elements.length > 0){
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