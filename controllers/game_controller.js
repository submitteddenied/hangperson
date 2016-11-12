var express = require('express');
var Hangperson = require('../lib/hangperson');

var router = express.Router();
/*
POST /new
GET /current
POST /guess
    - letter=<letter>
*/
var WORD_LIST = [
	"space",
	"earth",
	"planet",
	"star",
	"rocket",
	"exhaust"
]
var currentGame;
router.post("/new", function(req, res) {
	var word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
	currentGame = new Hangperson(word);
	console.log("Starting new game! [" + word + "]");
	res.json(currentGame.present());
});

router.get('/current', function(req, res) {
	if(currentGame) {
		res.json(currentGame.present());
	} else {
		res.send("No game in progress");
	}
});

router.put("/guess", function(req, res) {
	if(currentGame) {
		if(!currentGame.isGameOver()) {
			var letter = req.body.letter;
			currentGame.guess(letter);	
		}
		
		res.json(currentGame.present());
	} else {
		res.send("No game in progress");
	}
})




module.exports = router;