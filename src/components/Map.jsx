import React, {useState} from 'react';
import MapWorld from './MapWorld';
import CountryStats from './CountryStats';
import CountryCovid from './CountryCovid';
import WorldStats from './WorldStats';
import Char from './Char';

import useFetch from '../hooks/useFetch';

const Map = (props) => {
	const [country, setCountry] = useState('PE'); //default PERU

	/**Apis para consultar infromacion */
	const ApiCovid = `https://api.covid19api.com/total/country/${country}`;
	const ApiCountry = `https://restcountries.eu/rest/v2/alpha/${country}`;

	/**Creamos estados que guardaran la informacion el pais,codiv,... */
	const dataCovid = useFetch(ApiCovid, []); //Usamos la API de covid (hooks)
	const dataCountry = useFetch(ApiCountry, []); //Usamos la API de countrys(hooks)

	/**Renderizamos el mapa,informacion,...  */
	return (
		<div className='map'>
			{dataCountry?.loading ? console.log('cargando') : ''}
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
			<CountryCovid dataCovid={dataCovid?.data} />

			<Char dataCovid={dataCovid?.data} />
		</div>
	);
};

export default Map;
