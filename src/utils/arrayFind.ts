type TPropsType = Array<number | string | boolean>;
type TResultType = string[] | number[] | null;

export const arrayFind = (arr: TPropsType, search: string | RegExp): TResultType => {
    
    const res = [...arr].filter(item => {

        return typeof item === 'string' && 
        (typeof search !== 'string' 
        ? (search as RegExp).test(item) 
        : item === search) 
        ? item 
        : null;
    });

    return res.length ? res as string[] : null;
}