import React from 'react';
import {Sun, Moon, Covid} from '../Data/Icons';

import '../scss/header.scss';

const Header = (props) => {
	let change = () => {
		//Cambiamos el state de theme
		let theme = props.theme === 'dark' ? 'light' : 'dark';

		props.setTheme(theme);
	};

	/**Renderizamos el header y controlamos el estado que se encarga del tema black o light*/
	return (
		<header>
			<h1>
				Covid-19 <Covid />{' '}
			</h1>
			<div onClick={() => change()}>
				{props.theme === 'dark' ? <Moon /> : <Sun />}
			</div>
		</header>
	);
};

export default Header;
