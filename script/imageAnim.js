(() => {
	//select the elements that you want to work with
	let theButton = document.querySelector("#buttonHolder img");

	window.addEventListener("load", changeHeaderText);

	window.addEventListener("click", changeParagraphText);

	//functions go in the middle
	function changeHeaderText() {
		document.querySelector("h1").textContent = "Hey there from JS"
	}

	function changeParagraphText() {
		document.querySelector("p").textContent = "shiyetttt"
	}

	//event handling at the bottom
	theButton.addEventListener("click", changeHeaderText);

	// set up the puzzle pieces and boards
	
})();
