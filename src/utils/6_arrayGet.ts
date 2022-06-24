export const arrayGet = (arr: [], path: string): any => {
    let result = arr;
    const keys = path.split(new RegExp(/\[|]|\./)).filter(item => item !== '');

    for (let key of keys) result = result[key];

    return result;
}