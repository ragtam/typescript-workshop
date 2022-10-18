// 1. type a function that returns whatever it received,
// for number returned type should be number, for string it should be string and so on.

function fun<TParameter>(a: TParameter): TParameter {
    return a;
}

let num = fun(1);
let str = fun('hello');
let bool = fun(true);

export {}
