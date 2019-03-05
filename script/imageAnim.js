(() => {

	// // set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll('.drop-zone');

	function createPuzzlePieces(pictureIndex) {
		//generate puzzle pieces
		//debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`
			
			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(images/background${pictureIndex}.jpg)`
		
		initDrag();
	}

	//handling drag n drop functionality
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('draggin..........')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	//handle dragover n drop
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('you dragged me over!');
		});

				//drop function! run this in the debugger to figure out where
				//the parent node really is... 
				zone.addEventListener("drop", function(e) {
					e.preventDefault();
					console.log('ouch! you dropped me!');
				
				//e.target seems to be the parent node!
				
				// define the parent node with a better variable name, run it to
				// see what children are inside of the element.
				let dropEnd = e.target;
					//while the parent container does not equal zero and contains the "drop-zone" class,
					//a child can be placed inside of the zone. better a while than an if statement, as
					//there ios nothing else the loop should be doing.
					while (dropEnd !== 0 && !dropEnd.classList.contains("drop-zone")) {
					dropEnd = dropEnd.parentNode;
				}

				//prevent children stacking inside of containers using an if statement
				//if the dropEnd and dropEnd children are greater than one, no more
				//children can be placed onto that section of the puzzle board.
				if (dropEnd && dropEnd.childNodes.length > 0) {
					return false;
					e.preventDefault();
				}
			
			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));


		});
	});


	function resetPuzzlePieces() {
		// empty the thumbnail container!! You don't need it overlapping!!
		piecesBoard.innerHTML = "";
		//create the puzzle pieces from the image selected!!
		createPuzzlePieces(this.dataset.puzzleref);

		// identifying whats in the parent element
		var images = document.getElementsByClassName("puzzle-image");
    			while(images.length > 4){
    	// Slecting the child Elements and removing them
        		images[4].parentNode.removeChild(images[4]);
    }
    
}

	// event handling down here
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	createPuzzlePieces(0);
	
})();
