function isObject<T extends Object>(data: T): Boolean {
    return data instanceof Object;
}

export function arrayContains(arr: [], search: string | RegExp): Boolean {
    let result: Boolean;

    for (let key in arr) {
        result = isObject(arr[key])
            ? arrayContains(arr[key], search)
            : (search instanceof RegExp
                ? search.test(arr[key])
                : arr[key] === search)
        ;

        if (result)
        return result;

    }

    return false;
}