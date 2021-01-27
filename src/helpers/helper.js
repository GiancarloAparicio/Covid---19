export const getDataForChartLine = (statsCountry) => {
	const firstDay2021 = 345
	let point = 0;
    let totalDaysCovid = statsCountry.length
    
    let result = {
        background : [],
        data : []
    }

	let calculateStatToDays = (totalDaysCovid - firstDay2021) / 5

	for (let index = firstDay2021; index < statsCountry.length; index = index + calculateStatToDays) {
        result.data[point] = statsCountry[index]?.Confirmed;
        result.background[point] = 'rgba(255, 99, 132, 0.8)';
		point++;
    }

	return result;
};


