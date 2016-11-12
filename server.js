var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var gameController = require('./controllers/game_controller');

app.use('/hangperson', gameController);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
	console.log("Server listening on port " + PORT);
})