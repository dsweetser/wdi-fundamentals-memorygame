console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var board = document.getElementById('game-board');
var createCards = function(){
	for (var i = 0; i < 4; i++){
		var card = document.createElement('div');
		card.className='card';
		board.appendChild(card);
	}
}
createCards();
/*if (cardOne === cardFour){
	alert("You found a match!");
}
else {
	alert("Sorry, try again.")
}
*/
