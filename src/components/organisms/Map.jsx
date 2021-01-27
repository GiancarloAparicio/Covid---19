import React, { useState } from 'react';
import MapWorld from '../organisms/MapWorld';
import CountryStats from '../molecules/CountryStats';
import WorldStats from '../molecules/WorldStats';
import Chart from './Chart';
import Country from "../molecules/Country"
import useFetch from '../../hooks/useFetch';
import { API_STATS_COVID_COUNTRY, API_STATS_COUNTRY } from "../../config/env"

const Map = (props) => {
	const [country, setCountry] = useState('PE'); //default PERU

	const dataCovid = useFetch(`${API_STATS_COVID_COUNTRY}${country}`, []);
	const dataCountry = useFetch(`${API_STATS_COUNTRY}${country}`, []);

	return (
		<div className='map'>
			{dataCountry?.loading ? /*TODO: Add Spinner*/ null : ''}
			<MapWorld
				theme={props.theme}
				country={country}
				setCountry={setCountry}
			/>
			<WorldStats />
			<CountryStats
				dataCountry={dataCountry?.data}
				loading={dataCountry?.loading}
			/>
			<Country dataCovid={dataCovid?.data} />

			<Chart dataCovid={dataCovid?.data} />
		</div>
	);
};

export default Map;
