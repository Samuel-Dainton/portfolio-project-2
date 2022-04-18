# Memory Game

The Memory Game is a game made primarily using Javascript in which the user must match all the pairs of cards with fruit icons on them. It is a test of memory as once two cards that are not a matching pair are slected, the cards quickly turn themselves back over. If a user finds a new card matching one they found previously, they'll have to remember where the last one they found was otherwise it will increase their score.

The game offers 3 levels of difficulty, a score tracker to signify if the user improved on their best score or not and has a variety of audio and visual queues to keep them engaged and entertained.

For the purposes of testing, using the inspect tool you can open up the 'game' section which will help you to match the cards as you can see the names of the images.
You can also type gameWin() into the console which will trigger what would happen if you were to match all the cards.

[Responsive Test Image](/assets/images/readme-screenshots/responsive.png)

## UX

### Other Memory Games

Memory games are a fun way on training your brain and are quite abundant. What seperates some from others are their styling choises, available difficulties and reward systems. The goal of this game is to provide an experience that is both fun and retains the users interest in it by providing them with a challenge of beating their personal best by improving their score.

### User Stories
As a user I want to:
* Be able to set the difficulty of the challenge.
* Be rewarded with sounds and congratulatory prompts for my success.
* Keep record of my score to see if I beat my personal best. 

### Planning the Code

I began the process of building my game by imagining and writing down a walkthrough of the code which is as follows.
__________________________________
You have been given a set of cards
The cards have been given pictures and shuffled randomly into a grid/flexbox.
The cards will be images inside divs inside a flexbox
Cards start in a hidden state and flip when clicked also prompting a sound.

One card, x is flipped
Other card is flipped
    if, it's the same as the previous x, remove both cards
    else, return cards to unflipped state, add 1 to turn counter
Continue these steps until all cards are matched and no cards are remaining

So to convert it into code, what are the things to keep track of?

We can keep track of the type of card in an array
The array changes and consists of the game size and card types
cardArray.sort math random will help to shuffle the cards in the array

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
__________________________________

These ideas changed a lot through the development, but for the majoraty of it I feel the project ended up very
close to my initial ideas of how it would function.

![Wireframe Image](/assets/images/wireframe.png)

## Features

The finished game features 3 modes of difficulty which are Easy: 16 Cards. Medium: 24 Cards and Hard: 36 Cards.
Clicking on any of the difficulty buttons resets the game and generates a new shuffled grid of cards.
Clicking on the cards prompts a sound, flips the card over and pushes the details of the card into an array for checking.
When the second card is clicked, the cards are checked and the user is prompted with a sound if a match has been found.
Once all the pairs have been, matched a congratulatory message appears. The message details the number of moves the user took, their personal best for that difficulty and asks if they would like to play again.

## Testing 

* I tested that the page works in different browsers i.e. Chrome, Firefox, Safari.
* I tested that the site is responsive and adapts to look good and function properly on all standard screen sizes using the devtools built into Chrome.
* I confirmed that all the nav elements work and that all the content is easy to read and understand using Lighthouse to score the sites accessibility.
* I confirmed that all the form entry fields are set correctly, being required where necessary and only allowing the correct type of data input, such as the email field.

## Bugs

### Solved Bugs
On a number of occasions getting and element by a class required me to specify [0], as a class by default is supposed to be multiple items, even if there is only one element using the class.

Creating the image containers in Java made the elements look for their image sources starting from index.html not from script.js so I changed the pathing from ../images~ to ./assets/images~

Javascript pointerEvents were overriding any pointer event options set in the css so I had to change all of them to css.

### Remaining Bugs
Clicking on cards in rapid succession can cause multiple cards to enter the checker as they are being checked. If a match is found whilst other incorrect matches haven't been flipped back to their original state, all of the cards including the incorrect ones are given the matched class, leaving the incorrect as well as the correct cards flipped and making the user unable to interact with them. I reduced the occurence of this by speeding up the animation of the cards to a point that I haven't been able to repeat the effect myself, but I believe it is still possible if done fast enough.

## Validator Testing

* HTML
  * No errors were found when passing through the official (W3C) validator.

* CSS
  * No errors were found when passing through the official (Jigsaw) validator.

* JS
  * No errors were found when passing through the official (Jshint) validator.

* Accessibility
  * I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

### Accessibility score using Lighthouse

I managed to achieve high scores in Performance and Best Practices.

Accessibility and SEO scores suffer a fair ammount as the images do not have alt attributes. I wasn't entirely sure how to set the alt attribute for the images as they were being placed in by Javascript. But I decided not to spend time on it as the game really wouldn't be much if the images didn't work.

![Lighthouse Image](/assets/images/readme-images/lighthouse.png)

## Deployment

* This site was deployed to GitHub pages. The steps to deploy are as follows:
 * In the GitHub repository, navigate to the Settings tab
 * From the source section drop-down menu, select the Master Branch
 * Once the master branch has been selected, the page provides the link to the completed website.

The live link can be found here - https://samuel-dainton.github.io/portfolio-project-2/

## Future Enhancements

* I would like to work out a way to insert another card into the middle of the array after it has been shuffled so that for the medium difficulty I could use a 5x5 grid with 1 'Free Space' card in the middle to fit the layout of 
the grid more neatly. But it would have to be inserting a new type of card into an already generated grid, not just a new image into the array as I would want the card to be already flipped, unable to be interacted with and also only for the Medium difficulty.

## Credits

### Content

* The code and files used for the Favicon are from [Favicon.io](https://favicon.io/)

* The animation effect for flipping the cards was learned from [this tutorial](https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c)
 by Jeff Curtas.

* The code for the scrolling ticker text on the victory screen was copied in from [this tutorial](https://code-boxx.com/html-css-news-ticker-horizontal-vertical/#sec-horizontal) on CodeBoxx and was made by W.S.Toh.

* The following three videos also helped a great deal with building my project.
    * [Live Coding a Memory Game, by Web Dev Junkie](https://www.youtube.com/watch?v=bbb9dZotsOc&t=1262s)
    * [Memory Card Game Tutorial, by Dev Ed](https://www.youtube.com/watch?v=-tlb4tv4mC4&t=2067s)
    * [Card Game in Plain JavaScript, by PortEXE and Web Dev Simplified](https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=627s)

### Media 

* The audio for the game was taken from the following three files.
    * [Victory Bell](https://freesound.org/people/MLaudio/sounds/511484/)
    * [Card Match](https://freesound.org/people/LittleRainySeasons/sounds/335908/)
    * [Card Flip](https://freesound.org/people/f4ngy/sounds/240776/)

* The images for the cards are from the following providers.
    * [Brain Logo](https://99designs.co.uk/inspiration/logos/brain)

    * [Friot Icons](https://www.vectorstock.com/royalty-free-vector/fruits-flat-icons-vector-7377635)

### Futher Learning    

* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
* https://careerkarma.com/blog/javascript-queryselector-vs-getelementbyid/#:~:text=With%20a%20querySelector%20statement%2C%20you,clearly%20gets%20the%20job%20done
* https://www.w3schools.com/js/js_arrow_function.asp
* https://developer.mozilla.org/en-US/docs/Web/CSS/perspective


