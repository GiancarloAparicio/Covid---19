import React from 'react';
import CovidIcon from '../icons/CovidIcon';
import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';
import '../../scss/header.scss';

const Header = ({ theme, setTheme }) => {

	let changeTheme = () => {
		let newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
	};

	return (
		<header>
			<h1>
				Covid-19 <CovidIcon />
			</h1>
			<div onClick={() => changeTheme()}>
				{theme === 'dark' ? <MoonIcon /> : <SunIcon />}
			</div>
		</header>
	);
};

export default Header;
