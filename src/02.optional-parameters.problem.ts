// 1. Refactor MyOptionalInterface so that propA and propB were not repeated.

interface MyInterface {
    propA: number;
    propB: string;
}

interface MyOptionalInterface {
    propA?: number;
    propB?: string;
}

const a: MyInterface = { propA: 1, propB: 'abcd' };
const b: MyOptionalInterface = { propA: 1 };
const c: MyOptionalInterface = { propB: 'abcd' }

export {}
