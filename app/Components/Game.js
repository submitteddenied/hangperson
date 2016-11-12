var React = require('react');
var axios = require('axios');

var InputBox = require('./InputBox');
var PartialWordDisplay = require('./PartialWordDisplay');
var GuessedLetters = require('./GuessedLetters');
var HangpersonDisplay = require('./HangpersonDisplay');

var Game = React.createClass({
	getInitialState: function() {
		return {
			game: {
				partialWord: [],
				guessed: []
			}
		}
	},
	componentWillMount: function() {
		var self = this;
		axios.get('/hangperson/current')
			.then(function(result) {
				self.setState({
					game: result.data
				});
			});
	},
	guessLetter: function(letter) {
		var self = this;
		axios.put('/hangperson/guess', {letter: letter})
			.then(function(result) {
				self.setState({game: result.data});
			});
	},
	restart: function(e) {
		var self = this;
		e.preventDefault();
		axios.post('/hangperson/new', {})
			.then(function(result) {
				self.setState({game: result.data});
			});
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<h1>Hangperson!</h1>
					<button onClick={this.restart}>New Game</button>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-6">
						<HangpersonDisplay game={this.state.game} />
					</div>
					<div className="col-xs-12 col-md-6">
						<div className="row">
							<InputBox guessLetter={this.guessLetter}/>
						</div>
						<div className="row">
							<PartialWordDisplay word={this.state.game.partialWord} />
						</div>
						<div className="row">
							<GuessedLetters letters={this.state.game.guessed} />
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Game;