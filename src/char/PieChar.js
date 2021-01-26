import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChar = (props) => {
	let data = {
		labels: ['Recuperados', 'Fallecidos', 'Activos'],
		datasets: [
			{
				data: [
					props.data?.Recovered,
					props.data?.Deaths,
					props.data?.Active,
				],
				backgroundColor: [
					'rgb(89, 219, 185)',
					'rgb(255, 107, 107)',
					'rgb(101, 160, 233)',
				],
				borderColor: ['rgba(255, 255, 255, 1)'],
				borderWidth: 2,
			},

			/** Json() graficas **/
		],
	};

	return (
		<div id='circle' className='card'>
			<p className='title'>
				Casos confirmados:{' '}
				<strong className='yellow'>
					{' '}
					{props.data ? props.data.Confirmed : 0}{' '}
				</strong>{' '}
			</p>{' '}
			<Pie
				data={data}
				height={250}
				width={40}
				options={{
					maintainAspectRatio: false,
				}}
			/>{' '}
		</div>
	);
};

export default PieChar;
