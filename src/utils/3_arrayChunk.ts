export const arrayChunk = (arr: any[], count: number): any[] => {
    const result = [];

    const state = (arr: []) => {
        let index = 0;

        return {
            next: () => index++,
            get: () => arr[index]
        }
    }

    const {next, get} = state(arr as []);
    
    for (let i = 0; i < Math.ceil(arr.length / count); i++) {
        let newArray = [];

        for (let j = 0; j < count; j++) {
            if (get() !== undefined) {
                newArray.push(get());
            }

            next();
        }

        result.push(newArray);
    }


    return result;
}