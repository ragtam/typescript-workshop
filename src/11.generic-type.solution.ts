// 1. type a function that returns whatever it received,
// for number returned type should be number, for string it should be string and so on.

function fun<TParameter>(a: TParameter): TParameter {
    return a;
}

let num = fun<number>(1);
let str = fun<string>('hello');
let bool = fun<boolean>(true);

// @ts-expect-error
let incorrectType = fun<number>('string');

let inferredTParameter = fun(1);

export {}
