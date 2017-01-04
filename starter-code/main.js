console.log("JS file is connected to HTML! Woo!")

//commented out this step in favor of array approach
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var board = document.getElementById('game-board');
//creates cards, commented out to test out createBoard function
/* var createCards = function(){
	for (var i = 0; i < 4; i++){
		var NewCard = document.createElement('div');
		NewCard.className='card';
		board.appendChild(NewCard);
	}
}
createCards();
*/
var createBoard = function(){
	for (var i=0; i<cards.length; i++){
		var newCard = document.createElement('div');
		newCard.className='card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		board.appendChild(newCard);
	}
}
//checks to see if a match has been found
var isMatch = function(cards){
	if (cards[0]=== cards[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.")
	}
}

//controls logic once two cards are flipped
var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
//adds image when clicked
	if (this.getAttribute('data-card')==='queen'){
		this.innerHTML='<img src="queen.jpg" alt="This one looks like my puppy!"/>';
	}
	else {
		this.innerHTML='<img src="king.jpg" alt="You are cute too buddy"/>';
	}
//runs isMatch and resets board state if no match found
	if (cardsInPlay.length ===2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	// resets pictures
		for (var i=0; i <cards.length; i++){
			document.getElementsByClassName('card')[i].innerHTML='';
		}
	}
}
createBoard();
