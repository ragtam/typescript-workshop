// 1. figure out what is the type passed in to an Array<T>

type WhatIsArrayType<TArr> = TArr extends Array<infer KType> ? KType : TArr;

const arrayOfStrings = ['hello', 'world'];
type Test = WhatIsArrayType<typeof arrayOfStrings>;
const res: Test = 'hello world';

const arrayOfNumbers = [1, 2];
type Test1 = WhatIsArrayType<typeof arrayOfNumbers>;
const res1: Test1 = 100;

export {};
