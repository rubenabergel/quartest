import React from 'react';
import {Link} from 'react-router';

var Landing = React.createClass({
	render() {
		return (
			<div className="landing">
				<h1>Bringing back mental in health care!</h1>
				<h5>Taking care of you mental health can dramatically increase your general health, take the test to learn more</h5>
				<Link to="/test"><button className="btn btn-primary">Lets start!</button></Link>
			</div>
		)
	}
})


module.exports = Landing
