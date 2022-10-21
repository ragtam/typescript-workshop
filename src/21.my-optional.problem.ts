interface MyInterface {
    propA: string;
    propB: number;
}

type MyReadonly<TObj> = any

const x: MyReadonly<MyInterface> = {}
const y: MyReadonly<MyInterface> = { propA: 'hello', propB: 123 }

export {}
