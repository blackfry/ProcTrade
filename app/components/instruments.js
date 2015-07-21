var React = require('react');
var the_api = require('../utils/api');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			instruments: []
		}
	},
	componentDidMount: function () {
		the_api.get('/v1/instruments')
		.then(function(data) {
			this.setState({
				instruments: data.instruments
			})
		}.bind(this));
	},
	render: function () {
		return (
			<div className="instruments">
				Instruments
				{this.renderInstruments()}
			</div>
		)
	},
	renderInstruments: function () {
		return (
			this.state.instruments.map(function (instrument) {
				return (
					<li>
						{instrument}
					</li>
				)
			})
		)
	}
});