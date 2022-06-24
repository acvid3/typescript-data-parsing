export const arraySkip = (arr: any[], value: any): any[] => {
    for (let index in arr) {
        if (arr[index] === value) {
            arr.splice(0, Number(index));
            return arr;
        }
    }

    return [];
}