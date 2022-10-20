// 1. Refactor MyRequiredInterface so that propA and propB were not repeated.

interface MyInterface {
    propA?: number;
    propB?: number;
}

interface MyRequiredInterface {
    propA: number;
    propB: number;
}

const a: MyInterface = {};
// @ts-expect-error
const b: MyRequiredInterface = {};
const c: MyRequiredInterface = { propA: 1, propB: 2 }

export {}