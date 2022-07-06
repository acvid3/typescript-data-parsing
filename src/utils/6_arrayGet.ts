export const arrayGet = (arr: [], path: string): any => {
    let result = arr;
    const keys = path.split(new RegExp(/\[|]|\./)).filter(item => item !== '');

    for (let key of keys) result = result[key] !== undefined 
        ? result[key]
        : new Error('Error: bad paths')
    ;
    return result;
}