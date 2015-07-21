var React = require('react');
var the_api = require('../utils/api');
var Reflux = require('reflux');
var InstrumentStore = require('../stores/instrument-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(InstrumentStore, 'onChange')
	],
	getInitialState: function () {
		return {
			instruments: []
		}
	},
	componentWillMount: function () {
		Actions.getInstruments();
	},
	render: function () {
		return (
			<div className="List-group">
				Instruments
				{this.renderInstruments()}
			</div>
		)
	},
	renderInstruments: function () {
		return (
			this.state.instruments.slice(0, 10).map(function (instrument) {
				return (
					<Link to={"instruments/" + instrument.instrument} className="list-group-item" key={instrument.name}>
						<h4>{instrument.displayName}</h4>
						<ul>
							<p>Instrument:  {instrument.instrument}</p>
							<p>Pip Value: {instrument.pip}</p>
							<p>Maximum Trade Unit: {instrument.maxTradeUnits}</p>
						</ul>
					</Link>
				)
			})
		)
	},
	onChange: function (event, instruments) {
		this.setState({instruments: instruments});
	}
});