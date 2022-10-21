// 1. Refactor NewInterface so that it was propB optional

interface MyInterface {
    propA: string;
    propB: number;
}

// interface NewInterface {
//     propA: string;
//     propB?: number;
// }

type NewInterface = Omit<MyInterface, 'propB'> & Partial<Pick<MyInterface, 'propB'>>

const onlyA: NewInterface = { propA: 'hello' };
// @ts-expect-error
const onlyB: NewInterface = { propB: 123 };
const both: NewInterface = { propA: '123', propB: 123 }

export {}