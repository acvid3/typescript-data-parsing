const getEssence = {
    'string': (shema, item, transform) => {
        if (transform && shema === 'string') {
            return typeof item === 'number'
                ? item.toString()
                : typeof item === 'string'
                    ? item
                    : null
            ;
        }
        return typeof item === shema ? item : null
    },
    'object': (shema, item, transform) => item instanceof Object 
        ? Object
            .keys(shema)
            .map((key, index) => {

                if (item[key]) {
                    if (transform && shema[key] === 'string') {
                        return typeof item[key] === 'number'
                            ? {[key]: (item[key] as string).toString()}
                            : typeof item[key] === 'string'
                                ? {[key]: item[key]}
                                : null
                        ;
                    }

                    if (shema[key] === typeof item[key]) {
                        return {[key]: item[key]};
                    }
                }
        
                return null;
            })
        .pop() 
    : null
}

export const arrayNormalize = (arr: [], shema: string | Object, transform: boolean = false): any[] => {
    const result = [];
    for (const item of arr) {
        let el = getEssence[typeof shema](shema, item, transform);

        if (el !== null) {
            result.push(el);
        }
    }
 
    return result;
}