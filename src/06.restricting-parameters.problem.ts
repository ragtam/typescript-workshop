// 1. type myFun, so that it accepted only keys defined in MyInterface.

interface MyInterface {
    key: string;
    value: number;
}

function myFun(obj: MyInterface, prop: string): void {
    console.info(obj[prop]);
}

const myObj: MyInterface = { key: 'some key', value: 123 };

myFun(myObj, 'key');
myFun(myObj, 'value');
// @ts-expect-error
myFun(myObj, 'unknownKey');

export {};
