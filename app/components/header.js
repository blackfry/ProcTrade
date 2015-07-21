var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

	render: function () {
		return (
			<nav className="navbar navbar-default header">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-24 col-md-16">
							<Link to="/" className="navbar-brand">
								ProcTrade header
							</Link>
						</div>
					</div>
					<ul className="nav navbar-nav navbar-right">
						<li><a> Chart USDAUD </a></li>
					</ul>
				</div>
			</nav>		
		)
	}
});