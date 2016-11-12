var React = require('react');

var InputBox = React.createClass({
	getInitialState: function() {
		return {
			letterInput: ''
		};
	},
	handleChange: function(event){
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
	},
	handleSubmit: function(event) {
		event.preventDefault();
		if(this.state.letterInput == '') {
			return;
		}

		this.props.guessLetter(this.state.letterInput);
		this.setState({letterInput: ''});
	},
	render: function() {
		return (
			<form className="form-inline">
			  <div className="form-group">
			    <label htmlFor="letterInput">Letter</label>
			    <input onChange={this.handleChange} type="text" className="form-control" id="letterInput" placeholder="a" />
			  </div>
			  <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Guess</button>
			</form>
		);
	}
});

module.exports = InputBox;