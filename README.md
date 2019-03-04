# The JavaScript Drag and Drop function
## Hayden Main

### Starting off
First and foremost, we went and made a general puzzle program in class. We worked through the process of dragging and dropping elements in and creating a puzzle, but we did not work to fix the major bugs in the program.. That's where this assignment comes to play. I must solve the problem of puzzle pieces stacking and getting lost as well as the puzzle reset.

### Bug One
The problem in this bug is the puzzle pieces stack.
- Drag puzzle piece in
- Puzzle board space gets filled
- Drag other piece onto same square
- Previous piece disappears, and there is now only 3 pieces to make the puzzle.

To solve this, what I did was put in a breaker point at line 46 so I could find out where the parent node really was. I did figure it was probably "target" due to the zone area, but I wanted to be sure. I was right, to say the least.
With a while loop, I defined that parent node so I could hook into it, and then ran the code again, with a breaker point at this point in the code, to make sure I still had all the children and made the loop correcly.
From there, I pulled into the child node and parent node with an if statement, making it so that the children could not be placed if there was another child in the spot it was being dragged to. 

The only issue now is that if you put the piece in the wrong spot, it's there for good. But I was not instructed to fix that puzzle bug, just reseting the whole board and this fix.

### Bug 2