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
let getImages = 
    [{
            imgSrc: "../images/fruit/apple.jpg",
            name: "apple"
        },
        {
            imgSrc: "../images/fruit/bananna.jpg",
            name: "bananna"
        },
        {
            imgSrc: "../images/fruit/blackberry.jpg",
            name: "blackberry"
        },
        {
            imgSrc: "../images/fruit/blueberries.jpg",
            name: "blueberries"
        },
        {
            imgSrc: "../images/fruit/cherries.jpg",
            name: "cherries"
        },
        {
            imgSrc: "../images/fruit/grapes.jpg",
            name: "grapes"
        },
        {
            imgSrc: "../images/fruit/honeydew.jpg",
            name: "honeydew"
        },
        {
            imgSrc: "../images/fruit/lemon.jpg",
            name: "lemon"
        }, {
            imgSrc: "../images/fruit/apple.jpg",
            name: "apple"
        },
        {
            imgSrc: "../images/fruit/bananna.jpg",
            name: "bananna"
        },
        {
            imgSrc: "../images/fruit/blackberry.jpg",
            name: "blackberry"
        },
        {
            imgSrc: "../images/fruit/blueberries.jpg",
            name: "blueberries"
        },
        {
            imgSrc: "../images/fruit/cherries.jpg",
            name: "cherries"
        },
        {
            imgSrc: "../images/fruit/grapes.jpg",
            name: "grapes"
        },
        {
            imgSrc: "../images/fruit/honeydew.jpg",
            name: "honeydew"
        },
        {
            imgSrc: "../images/fruit/lemon.jpg",
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

let imageGenerator = function() {

    getImages.forEach((element) => {
        let front = document.createElement("div")
        let picture = document.createElement("img")
        let back = document.createElement("div")

        front.classList.add("font")
        picture.classList.add("picture")
        back.classList.add("back")
        
        game = document.getElementsByClassName("game")
        game[0].appendChild(front);
        front.appendChild(picture);
        front.appendChild(back);
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