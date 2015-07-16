var React = require('react');

module.exports = React.creatClass({
	render: function () {
		return (
			<nav className="navbar navbar-default header">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">
						ProcTrade header
					</a>
					<ul className="nav navbar-nav navbar-right">
						<li><a> Chart USDAUD </a></li>
					</ul>
				</div>
			</nav>		
		)
	}
});