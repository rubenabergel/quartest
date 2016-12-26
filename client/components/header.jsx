import React from 'react';
import {Link} from 'react-router';

var Header = React.createClass({
	render() {
		return (
			<div>
				<div className="header">
					<Link to="/"><span className="brand">Quartest</span></Link>
				</div>
			</div>
		)
	}
})


module.exports = Header
