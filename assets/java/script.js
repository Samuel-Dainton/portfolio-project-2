/**
 * Event Listeners
 */
document.addEventListener("DOMContentLoaded", function () {
    shuffledCards()
    imageGenerator()
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
    },
    {
        imgSrc: "./assets/images/fruit/bananna.jpg",
        name: "bananna"
    },
    {
        imgSrc: "./assets/images/fruit/blackberry.jpg",
        name: "blackberry"
    },
    {
        imgSrc: "./assets/images/fruit/blueberries.jpg",
        name: "blueberries"
    },
    {
        imgSrc: "./assets/images/fruit/cherries.jpg",
        name: "cherries"
    },
    {
        imgSrc: "./assets/images/fruit/grapes.jpg",
        name: "grapes"
    },
    {
        imgSrc: "./assets/images/fruit/honeydew.jpg",
        name: "honeydew"
    },
    {
        imgSrc: "./assets/images/fruit/lemon.jpg",
        name: "lemon"
    }, {
        imgSrc: "./assets/images/fruit/apple.jpg",
        name: "apple"
    },
    {
        imgSrc: "./assets/images/fruit/bananna.jpg",
        name: "bananna"
    },
    {
        imgSrc: "./assets/images/fruit/blackberry.jpg",
        name: "blackberry"
    },
    {
        imgSrc: "./assets/images/fruit/blueberries.jpg",
        name: "blueberries"
    },
    {
        imgSrc: "./assets/images/fruit/cherries.jpg",
        name: "cherries"
    },
    {
        imgSrc: "./assets/images/fruit/grapes.jpg",
        name: "grapes"
    },
    {
        imgSrc: "./assets/images/fruit/honeydew.jpg",
        name: "honeydew"
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
    let arrayOrder = getImages
    arrayOrder.sort(() => Math.random() - 0.5)
    return arrayOrder
}

/**
 * Generate Card Grid
 */

let imageGenerator = () => {
    let arrayOrder = shuffledCards()

    arrayOrder.forEach((element) => {
        let card = document.createElement("div")
        let picture = document.createElement("img")
        let back = document.createElement("div")

        card.classList.add("card")
        card.setAttribute("name", element.name)
        card.id = "card"
        picture.classList.add("picture")
        back.classList.add("back")

        game = document.getElementsByClassName("game")
        game[0].appendChild(card);
        card.appendChild(picture);
        card.appendChild(back);

        picture.src = element.imgSrc

        let hasCardFlipped = false;
        let firstCard, secondCard;
        card.addEventListener("click", () => {
            card.classList.toggle("flipCard")
            if (!hasCardFlipped) {
                hasCardFlipped = true;
                firstCard = this;
                return;
            }

            secondCard = this;
            hasCardFlipped = false;

            checkForMatch();
        })
    })
};

/**
 * Compare Cards
 */
checkForMatch = () => {

    if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        alert("Match!")
        return;
    } else {
        firstCard.classList.remove('flipCard');
        secondCard.classList.remove('flipCard');
    }
}


/**
 * Count Guesses
 */

/**
 * Congratulations
 */