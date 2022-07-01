export const arrayAvg = (arr: (number | string | boolean )[], skipNaN: boolean = false): number => {
    const numbers = [...arr].filter(value => typeof value === 'number');
    const sum = (numbers as number[]).reduce((acc, num) => acc + num, 0);

    return sum / (skipNaN ? numbers.length : arr.length);
}