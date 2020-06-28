import React from 'react';
import {Line} from 'react-chartjs-2';
import '../scss/char.scss';

const LineChar = (props) => {
	console.log(props.data);
	let stats = props.data?.length > 50 ? getData(props.data) : [];
	let background = props.data?.length > 50 ? getBackground(stats) : [];

	let data = {
		labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Julio'],
		datasets: [
			{
				label: props.data[0]?.Country,
				data: stats,
				backgroundColor: background,
				borderColor: ['rgba(255, 99, 132, 0.5)'],
				borderWidth: 5,
			},
			/** Json() graficas **/
		],
	};

	return (
		<div id='line' className='card'>
			<p className='title'>Casos confirmados:</p>
			<Line
				data={data}
				height={250}
				width={40}
				options={{maintainAspectRatio: false}}
			/>
		</div>
	);
};

const getBackground = (props) => {
	let background = [];
	let point = 0;

	for (let index = 0; index < props.length; index = index + 30) {
		background[point] = 'rgba(255, 99, 132, 0.8)';
		point++;
	}

	return background;
};

const getData = (props) => {
	let data = [];
	let point = 0;

	for (let index = 0; index < props.length; index = index + 30) {
		data[point] = props[index]?.Confirmed;
		point++;
	}

	return data;
};

export default LineChar;
