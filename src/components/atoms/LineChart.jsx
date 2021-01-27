import React from 'react';
import { Line } from 'react-chartjs-2';
import { getMonths } from '../../Data/Months'
import { getDataForChartLine } from '../../helpers/helper';
import '../../scss/char.scss';

const LineChart = ({ data }) => {

	let chart = getDataForChartLine(data);

	let dataStat = {
		labels: getMonths(),
		datasets: [
			{
				label: data[0]?.Country,
				data: chart.data,
				backgroundColor: chart.background,
				borderColor: ['rgba(255, 99, 132, 0.5)'],
				borderWidth: 5,
			},

		],
	};

	return (
		<div id='line' className='card'>
			<p className='title'>Casos confirmados:</p>
			<Line
				data={dataStat}
				height={250}
				width={40}
				options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};



export default LineChart;
