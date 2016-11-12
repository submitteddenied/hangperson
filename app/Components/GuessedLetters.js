var React = require('react');

var GuessedLetters = React.createClass({
	renderLetters: function() {
		return this.props.letters.sort().map(function(l) { 
			return (
				<span className="letter" key={l}> {l} </span>
			)
		});
	},
	render: function() {
		return (
			<div>
				{this.renderLetters()}
			</div>
		);
	}
});

module.exports = GuessedLetters;