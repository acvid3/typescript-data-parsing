import { arrayGet } from './6_arrayGet';

const getPath = (prevKey: string, data, paths) => {
   for (let key in data) {
        data[key] instanceof Object 
        ? getPath(prevKey + `[${key}]`, data[key], paths)
        : paths.push(prevKey + `[${key}]`);
    }
}

const isRegex = (search: string | RegExp): boolean => {
    return search instanceof RegExp;
}

const isContains = (arr, search, path) => isRegex(search) ? (search as RegExp).test(arrayGet(arr, path)) : arrayGet(arr, path) === search;

export const arraySearch = (arr: [], search: string | RegExp, path?: string): [path: string, value: string | number][] => {
    const paths = [];
    getPath('', arr, paths);    
    
    return paths.filter(path => isContains(arr, search, path) ? path : false).map(path => [path, arrayGet(arr, path)]);
}
