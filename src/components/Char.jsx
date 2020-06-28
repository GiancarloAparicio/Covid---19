import React from 'react';
import LineChar from '../char/LineChar';
import PieChar from '../char/PieChar';

const Char = (props) => {
	let stats = props.dataCovid[props.dataCovid.length - 1];

	return (
		<div id='charts'>
			<LineChar data={props.dataCovid} />
			<PieChar data={stats} />
		</div>
	);
};

export default Char;
