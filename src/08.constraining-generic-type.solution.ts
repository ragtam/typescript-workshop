// 1. create MyArray type, that works the same as Array type, but the one that accepts only numbers;

type MyArray<TValue extends number> = TValue[]

const arrayOfNumbers: MyArray<number> = [1,2,3];
// @ts-expect-error
const arrayOfStrings: MyArray<string> = ['a', 'b', 'c'];

export {}