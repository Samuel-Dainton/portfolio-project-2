/**
 * Event Listeners
 */
document.addEventListener("DOMContentLoaded", function () {
    shuffledCards();
    imageGenerator();
})

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
            card.classList.toggle("flipCard");
            checkForMatch(names);
            numberOfCards.push(element)
        })
    })
};

/**
 * Compare Cards
 */
let numberOfCards = []
const checkForMatch = (names) => {

    console.log(numberOfCards)
    let targetCard = names.target;
    targetCard.classList.add("target");

    if (numberOfCards.length === 2) {
        if (numberOfCards[0] === numberOfCards[1]) {
            console.log("match");
            numberOfCards.forEach((card) => {
                card.style.pointerEvents = "none"
                numberOfCards = []
                console.log(numberOfCards)
            });
        } else {
            console.log("wrong")
            numberOfCards.forEach((card) => {
                setTimeout(() => card.classList.remove("flipCard"), 2000);
                numberOfCards = []
                console.log(numberOfCards)
            });
        }
    }
}






/**
 * Count Guesses
 */

/**
 * Congratulations
 */