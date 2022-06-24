function isArray<T extends Array<T>>(data: T): Boolean{
    return Array.isArray(data);
}

function isObject<T extends Object>(data: T): Boolean {
    return data instanceof Object;
}

function parse(data: [] | {}, search: string | RegExp): Boolean {
    let result: Boolean;

    for (let key in data) {
        result = isObject(data[key]) || isArray(data[key])
        ? parse(data[key], search)
        : (search instanceof RegExp
            ? search.test(data[key])
            : data[key] === search)
        ;

        if (result)
        break;

    }

    return result;
}

export function arrayContains(arr: [], search: string | RegExp): Boolean {
    return parse(arr, search);
}