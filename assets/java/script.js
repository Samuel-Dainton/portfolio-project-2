/**
 * Event Listeners
 */
 document.addEventListener("DOMContentLoaded", function () {
    cardGenerator()
    gameSection()
})
/**
 * Select Game Type
 */

/**
 * Get Cards
 */
let cardGenerator = function() {
        let cardImages = [
            { imgSrc: "../images/fruit/apple.jpg", name:"apple" },
            { imgSrc: "../images/fruit/bananna.jpg", name:"bananna" },
            { imgSrc: "../images/fruit/blackberry.jpg", name:"blackberry" },
            { imgSrc: "../images/fruit/blueberries.jpg", name:"blueberries" },
            { imgSrc: "../images/fruit/cherries.jpg", name:"cherries" },
            { imgSrc: "../images/fruit/grapes.jpg", name:"grapes" },
            { imgSrc: "../images/fruit/honeydew.jpg", name:"honeydew" },
            { imgSrc: "../images/fruit/lemon.jpg", name:"lemon" }
        ]
} 
console.log(cardGenerator)
/**
 * Shuffle Cards
 */

/**
 * Generate Card Grid
 */
cardImages.array.forEach((item) => {
    let gameSection = document.getElementsByClassName("game")
    let card = document.createElement("div")
    card.classList.add("generated-card")
});
/**
 * Compare Cards
 */

/**
 * Count Guesses
 */

/**
 * Congratulations
 */