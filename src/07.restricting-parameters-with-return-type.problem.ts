interface MyInterface {
    key: string;
    value: number;
}

function myFun(obj: MyInterface, prop: keyof MyInterface): any {
    return obj[prop];
}

const myObj = { key: 'some key', value: 123 };

const res1 = myFun(myObj, 'key');
const res2 = myFun(myObj, 'key');
// @ts-expect-error
const res3: boolean = myFun(myObj, 'value');

export {};
