import { arrayGet } from './6_arrayGet';

const getPath = (prevPath, data, cb) => {
	for (let key in data) {
		const currentKeyPath = prevPath + `[${key}]`;
		data[key] instanceof Object
			? getPath(currentKeyPath, data[key], cb)
			: cb(currentKeyPath, data[key]);
	}
}

const createCheckValue = (search) => search instanceof RegExp
	? (value) => search.test(value)
	: (value) => search === value
;

export const arraySearch = (arr: [], search: string | RegExp, path?: string): [path: string, value: string | number][] => {
    const results = [];

	const checkValue = createCheckValue(search);

	getPath('', arr, (path, value) => {
		if (checkValue(value)) {
			results.push([path, value]);
		}
	});

	return results;
}
