import React from 'react';
import Header from './header.jsx';

var Home = React.createClass({
	render() {
		return (
			<div>
				<Header />
				<div className="bodyFrame">
					{this.props.children}
				</div>
			</div>
		)
	}
})


module.exports = Home
