export default (array) => {
	const enumArray = [...array];

	array.forEach((item, i) => {
		enumArray[item] = {
			key: i,
			value: item,
		};
	});


	return enumArray;
}
