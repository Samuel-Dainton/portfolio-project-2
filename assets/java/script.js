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

        card.addEventListener("click", (names) => {
            card.classList.toggle("flipCard")
            checkForMatch(names)
        })
    })
};

/**
 * Compare Cards
 */
checkForMatch = (names) => {
    let targetCard = names.target
    targetCard.classList.add("target")
    targetCard.classList.add("totalCards")
    let targetCards = document.querySelectorAll(".target")
        if (targetCards.length === 2)
        alert("Match!")
        return;
    }
    let totalCards = document.querySelectorAll(".totalCards")
    if (totalCards.length === 4) {
        alert("Win!")
    }



/**
 * Count Guesses
 */

/**
 * Congratulations
 */