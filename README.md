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

*What should I do?*
- Run code with debuggers
- Identify parent node
- Find out where children are and how to pull them in 
- Hook into children and parent to make a statement of "if this has one thing in it, then you cant go in it"


*My Solving*
To crush this bug, what I did was put in a breaker point at line 46 so I could find out where the parent node really was. I did figure it was probably "target" due to the zone area, but I wanted to be sure. I was kind of right, to say the least. Each drop-zone class was a parent node, really.
With a while loop, I defined that parent node with a name after making a loop hooking into all of the drag-zone classes. I ran the code again, with a breaker point at this point in the code, to make sure I still had all the children and made the loop correcly.
From there, I pulled into the child node and parent node with an if statement, making it so that the children could not be placed if there was another child in the spot it was being dragged to. 

The only issue now is that if you put the piece in the wrong spot, it's there for good. But I was not instructed to fix that puzzle bug, just reseting the whole board and this fix.

### Bug 2
The issue within this bug is simple in theory, but kind of hard.. 
- Puzzle is completed
- Click on new puzzle to complete
- Background changes, the pieces stay on.

*What should I do*
- Identify the parent element
- Identify what is exactly inside of the parent element
- Select the children from the parent
- Remove the children 

*My Solving*

To end this bugs life, I first went into the parent element to figure out what was inside. I has already defined it in the previous bug fix, so it was about hooking into that again and refreshing it. I noticed that each puzzle board was a button ranging between 0 and 4. I used that to my advantage and hooked into the elements through class name selector, and defined a new variable called "tile". I then put in a while loop, so that when 'tile' has a length over 4, the parent node removes the child. This loop provided the right reset, and crushed the bug. 

