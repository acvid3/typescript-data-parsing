export const arrayCombine = (keys: [], values: []): Object => {
    const entries = new Object;

    Object.
    values(keys).
    filter(key => typeof key !== 'boolean' && typeof key !== 'object').
    map((key, index) => entries[key] = values[index]);

    return entries;
}