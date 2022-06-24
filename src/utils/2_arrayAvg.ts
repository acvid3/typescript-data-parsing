export const arrayAvg = (arr: (number | string | boolean )[], skipNaN: boolean = false): number => {
    const numbers = [...arr].filter(value => typeof value === 'number');

    return (numbers as number[]).reduce((acc, num) => acc + num, 0) 
    / 
    (skipNaN ? numbers.length : arr.length);
}