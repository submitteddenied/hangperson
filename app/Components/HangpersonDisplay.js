var React = require('react');

var HangpersonDisplay = React.createClass({
	render: function() {
		return (
			<div className="row">
				<h2>{this.props.game.guessesRemaining}/{this.props.game.maxGuesses} Remaining</h2>
			</div>
		);
	}
});

module.exports = HangpersonDisplay;