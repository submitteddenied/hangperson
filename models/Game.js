var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
	savedGame: { type: Schema.Types.Mixed },
	startDate: { type: Schema.Types.Date }
});

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;