import React from 'react';
import LineChart from '../atoms/LineChart';
import PieChar from '../atoms/PieChart';

const Chart = (props) => {
	let stats = props.dataCovid[props.dataCovid.length - 1];

	return (
		<div id='charts'>
			<LineChart data={props.dataCovid} />
			<PieChar data={stats} />
		</div>
	);
};

export default Chart;
