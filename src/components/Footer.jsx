import React from 'react';
import '../scss/footer.scss';

const Footer = (props) => {
	return (
		<footer className='card footer'>
			<p>
				© 2020 Copyright | Autor:
				<a
					href='https://github.com/GiancarloAparicio'
					target='_blank'
					rel='noopener noreferrer'>
					Erick Giancarlo
				</a>
			</p>
		</footer>
	);
};

export default Footer;
