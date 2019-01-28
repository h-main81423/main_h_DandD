(() => {
	//variables always come first
	
	// //select the elements that you want to work with
	// let theButton = document.querySelector("#buttonHolder img");

	// window.addEventListener("load", changeHeaderText);

	// window.addEventListener("click", changeParagraphText);

	// //functions go in the middle
	// function changeHeaderText() {
	// 	document.querySelector("h1").textContent = "Hey there from JS"
	// }

	// function changeParagraphText() {
	// 	document.querySelector("p").textContent = "shiyetttt"
	// }

	// //event handling and function evokation at the bottom

	// theButton.addEventListener("click", changeHeaderText);

	// // set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	function createPuzzlePieces(pictureIndex) {
		//generate puzzle pieces
		//debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`
			
			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(images/background${pictureIndex}.jpg)`
	}

	function resetPuzzlePieces() {
		// empty the container!!! dont fill it up too much :(
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref);		
	}

	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	createPuzzlePieces(0);
	
})();
