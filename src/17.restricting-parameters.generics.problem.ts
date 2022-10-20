function myFun<TObj extends object>(obj: TObj, prop: keyof TObj): TObj[keyof TObj] {
    return obj[prop];
}

const res1 = myFun({ a: 'some prop', b: 1 }, 'a');
const res2 = myFun({ b: true }, 'b');
// @ts-expect-error
const res3: boolean = myFun(1, 'toString');

export {}