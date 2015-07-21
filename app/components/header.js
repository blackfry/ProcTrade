var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

	render: function () {
		return (
			<nav className="navbar navbar-default header">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						ProcTrade
					</Link>
				</div>
			</nav>		
		)
	}
});