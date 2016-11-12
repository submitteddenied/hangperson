var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var mongoUrl = process.env.MONGO || 'mongodb://localhost';
mongoose.connect(mongoUrl);
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

var gameController = require('./controllers/game_controller');

app.use(express.static("./public"));

app.use('/hangperson', gameController);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
	console.log("Server listening on port " + PORT);
})