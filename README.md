Walkthrough of script.

You have been given a set of cards
The cards have been given pictures and shuffled randomly into a grid/flexbox.
Are they images or icons? Are they inside divs or are they buttons?
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
Can I duplicate the array so there are two cards with the index of 0, 1, 2 and etc? Can I change all the even values by +1 so that [0, 1, 2, 3, 4, 5] becomes [1, 1, 3, 3, 5, 5]

How do I know if the flip is first or second? Because we increment flips every time.
For the first flip, flip == 1; second, flip == 2; if it's flipped again, it becomes flip == 3, which we should take as the first flip.
From this, we can say that when flip is odd, it's the first flip, and when flip is even, it's the second.

If both flips do not match: don't make any changes.
If both flips match: setAttribute the cards to mark them as inactive; increment int 'matches' by 2

If all cards are matched, game is over. So if 'matches' == cards(array size /2?), all cards are matched.
I need to know if the previous flip was a match. For this, I can use a variable currentlyFlippedCard.

![Wireframe Image](/assets/images/wireframe.png)