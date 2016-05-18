# Callbacks Tic Tac Toe lab

The suggested after hours work for today is to create a finished version of
Tic Tac Toe. If you haven't done this yet, make sure that you can!

> Note: there may need to be structural changes to the code given to you in 
> that solution as you work through the problem. Be sure that you are methodical 
> in implementing it, testing each step of the way with a lot of `console.log`.

If you have a working version, you can do the below, but each is difficult.
Don't go overboard.

### Part One: Simple Callbacks

Make sure that your program now uses <a href="http://www.w3schools.com/jsref/met_element_addeventlistener.asp">`domElement.addEventListener`</a> and the
events associated with:

1. **the page load**: set up a new game,
2. **clicking a square**: moving,
3. (bonus) **hovering over a square**: 
   1. show a somewhat transparent icon ("X" or "O", or something like that)
      to represent what value will be entered in the square if clicked, and
      the square is a valid move, and
   2. if the square is an invalid move, make the background a different shade 
      than if it is a valid move.

### Part Two: Timers & Intervals

1. Implement a visible timer that counts the number of seconds that a given
   player has had to move. It starts at `00:00` and counts up, every move!
2. Once the timer has reached 10 seconds, make it flash red!
3. Once the timer has reached 15 seconds, alert the player that they have
   take too long, and chose a random move for them!

### (Bonus) Part Three: Score Card

Display a history of who has won the games previously played. This history
does **not** need to outlive a page refresh.