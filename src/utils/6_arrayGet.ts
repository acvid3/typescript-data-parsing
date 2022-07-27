export const arrayGet = (arr, path) => {
	let result = arr;
	const keys = path
		.split(new RegExp(/\[|]|\./))
		.filter(item => item !== '')
    ;
        
	for (let key of keys) {
		if (result[key] !== undefined ) {
			result = result[key];
		} else {
			result = undefined;
			break;
		}
	}
    
	return result;
}