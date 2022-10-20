// 1. Refactor MyPickedInterface so that propA was not repeated.

interface MyInterface {
    propA?: number;
    propB?: number;
}

interface MyPickedInterface {
    propA: number;
}

const a: MyPickedInterface = { propA: 1 };

export {};
