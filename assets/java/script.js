/**
 * Event Listeners
 */
document.addEventListener("DOMContentLoaded", function () {
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

console.log(getImages)
/**
 * Shuffle Cards
 */

/**
 * Generate Card Grid
 */

let imageGenerator = function () {

    getImages.forEach((element) => {
        let card = document.createElement("div")
        let picture = document.createElement("img")
        let back = document.createElement("div")

        card.classList.add("card")
        card.id = "card"
        picture.classList.add("picture")
        back.classList.add("back")

        game = document.getElementsByClassName("game")
        game[0].appendChild(card);
        card.appendChild(picture);
        card.appendChild(back);

        picture.src = element.imgSrc

        card.addEventListener("click", () => {
            card.classList.toggle("flipCard")
        })
    })
};

/**
 * Compare Cards
 */

/**
 * Count Guesses
 */

/**
 * Congratulations
 */
