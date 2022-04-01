UX

As a user I want to:
be able to set the difficulty of the challenge
be rewarded with sounds and congratulatory prompts for my success
keep record of my score to see if I beat my personal best 

Walkthrough of script.

You have been given a set of cards
The cards have been given pictures and shuffled randomly into a grid/flexbox.
The cards will be images inside divs inside a flexbox
Cards start in a hidden state and flip when clicked also prompting a sound.

One card, x is flipped
Other card is flipped
    if it's the same as the previous x, remove both cards
        else return cards to unflipped state, add 1 to turn counter
Continue these steps until all cards are matched and no cards are remaining

So to convert it into code, what are the things to keep track of?

We can keep track of the type of card in an array
The array changes and consists of the game size and card types
cardArray.sort math random

Maintain an int 'flips' to keep track of number of 'flips', and int 'matches' to keep track of matches, initially 0
Maintain an int 'currentlyFlippedCard' to store the 1st flipped card's index.
If it's the first flip, store it in currentlyFlippedCard.

Increment int 'flips' every time a card is flipped(flips++).
If it's the second flip, check if the type of card matches the type of card in 'currentlyFlippedCard'.
Give the img's name="banana" and target the names to match cards

How do I know if the flip is first or second? Because we increment flips every time.
For the first flip, flip == 1; second, flip == 2; if it's flipped again, it becomes flip == 3, which we should take as the first flip.
From this, we can say that when flip is odd, it's the first flip, and when flip is even, it's the second.

If both flips do not match: don't make any changes.
If both flips match: setAttribute the cards to mark them as inactive; increment int 'matches' by 2

If all cards are matched, game is over. So if 'matches' == cards(array size), all cards are matched.
I need to know if the previous flip was a match. For this, I can use the variable currentlyFlippedCard.

For the difficulties can I have 1 big array, if difficulty is easy only select array index 0, 11 for 12 cards. Rather than having 5 arrays of the same images.

The flipped cards have names but how do I select the names of the clicked cards.

![Wireframe Image](/assets/images/wireframe.png)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
https://careerkarma.com/blog/javascript-queryselector-vs-getelementbyid/#:~:text=With%20a%20querySelector%20statement%2C%20you,clearly%20gets%20the%20job%20done
https://www.w3schools.com/js/js_arrow_function.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c

https://freesound.org/people/MLaudio/sounds/511484/
https://freesound.org/people/LittleRainySeasons/sounds/335908/
https://freesound.org/people/f4ngy/sounds/240776/
https://99designs.co.uk/inspiration/logos/brain

Bugs:

calling game.appendChild(front) returned an error because the appendChild function has to target a DOM element but game was calling a NodeList. By changing it to game[0] it calls a valid DOM element instead.

Creating the image containers in Java made the elements look for their image sources starting from index.html not from script.js so I changed the pathing from ../images~ to ./assets/images~

Cannot read properties of null (reading 'addEventListener')