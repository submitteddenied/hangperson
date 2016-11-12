var express = require('express');
var Hangperson = require('../lib/hangperson');
var GameModel = require('../models/Game');

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
];
router.post("/new", function(req, res) {
	var word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
	var newGame = new Hangperson(word);
	console.log("Starting new game! [" + word + "]");

	GameModel.create({
		savedGame: newGame.serialize(),
		startDate: (new Date()).getTime()
	}, function() {
		res.json(newGame.present());	
	})
});

router.get('/current', function(req, res) {
	GameModel.find({}).sort('-date').limit(1).then(function(docs) {
		var game = new Hangperson(docs[0].savedGame);
		console.log("Loaded game: " + docs[0]._id);
		res.send(game.present());
	})
});

router.put("/guess", function(req, res) {
	GameModel.find({}).sort('-date').limit(1).then(function(docs) {
		var game = new Hangperson(docs[0].savedGame);
		console.log("Loaded game: " + docs[0]._id);
		if(!game.isGameOver()) {
			var letter = req.body.letter;
			game.guess(letter);
			docs[0].savedGame = game.serialize();
			docs[0].markModified('savedGame');
			docs[0].save(function() {
				res.json(game.present());
			})
		} else {
			res.json(game.present());
		}
		
	});
})




module.exports = router;