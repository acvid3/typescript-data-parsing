export const arrayChunk = (arr: any[], count: number): any[] => {
    const result = [];
    while(arr.length) result.push(arr.splice(0, count));

    return result;
}