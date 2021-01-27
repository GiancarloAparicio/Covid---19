let months = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];

export const getMonths = () => {
	let date = new Date();
	return months.slice(0, date.getMonth()+1);
};