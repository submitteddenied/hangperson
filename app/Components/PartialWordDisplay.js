var React = require('react');

var PartialWordDisplay = React.createClass({
	outputLetters: function() {
		var style = {
			marginRight: '2px'
		};
		var result = [];

		for(var i = 0; i < this.props.word.length; i++) {
			if(this.props.word[i] == '') {
				result.push(
					<span style={style} key={i} className="unguessed">_</span>
				);
			} else {
				result.push(
					<span style={style} key={i} className="guessed">{this.props.word[i]}</span>
				);
			}
		}

		return result;
	},
	render: function() {
		return (
			<div className="row">
				<h1>{this.outputLetters()}</h1>
			</div>
		);
	}
});

module.exports = PartialWordDisplay;