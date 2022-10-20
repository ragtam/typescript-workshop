// 1. Refactor MyPickedInterface so that propA was not repeated.

interface MyInterface {
    propA?: number;
    propB?: number;
}

type MyPickedInterface = Pick<MyInterface, 'propA'>

const a: MyPickedInterface = { propA: 1 }

export {}