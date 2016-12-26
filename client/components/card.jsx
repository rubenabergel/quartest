import React from 'react';

var Card = React.createClass({
	render() {
		return (
			<div className={this.props.propClass}>
				<p><b>{this.props.title}</b></p>
				<button className="btn" onClick={this.props.handleClickOnCardButton}>contact</button>
			</div>
		)
	}
})


module.exports = Card
