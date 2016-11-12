/*
constuctor(<word>)
serialize()
deserialize( <game> )
isGameOver()
isWordGuessed()
guess(<letter>)
*/

function Hangperson(word) {
	this.word = word;
	this.wordLength = word.length;
	this.guessed = [];
	this.guessesRemaining = 10;
	this.maxGuesses = 10;
}

Hangperson.prototype.serialize = function() {
	var result = {};
	result.wordLength = this.wordLength;
	result.guessed = this.guessed;
	result.guessesRemaining = this.guessesRemaining;
	result.maxGuesses = this.maxGuesses;
	result.word = this.word;

	return result;
}

Hangperson.prototype.present = function() {
	var result = {};
	result.wordLength = this.wordLength;
	result.guessed = this.guessed;
	result.guessesRemaining = this.guessesRemaining;
	result.maxGuesses = this.maxGuesses;
	result.partialWord = [];
	for(var i = 0; i < this.wordLength; i++) {
		var thisLetter = this.word.charAt(i);
		if(this.guessed.indexOf(thisLetter) > -1) {
			result.partialWord.push(thisLetter);
		} else {
			result.partialWord.push("");
		}
	}

	return result;	
}

Hangperson.prototype.isGameOver = function() {
	return this.isWordGuessed() || 
		   this.guessesRemaining == 0;
}

Hangperson.prototype.isWordGuessed = function() {
	for(var i = 0; i < this.wordLength; i++) {
		var thisLetter = this.word.charAt(i);
		if(this.guessed.indexOf(thisLetter) < 0) {
			return false;
		}
	}

	return true;
}

Hangperson.prototype.guess = function(letter) {
	if(this.guessed.indexOf(letter) > -1) {
		return;
	}

	this.guessed.push(letter);
	if(this.word.indexOf(letter) < 0) {
		this.guessesRemaining--;
	}
}

/*
Word to guess
Length of word to guess
Guessed letters
Guesses remaining
Max guesses
*/
module.exports = Hangperson;