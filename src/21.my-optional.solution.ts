interface MyInterface {
    propA: string;
    propB: number;
}

type MyOptional<TObj> = {[Property in keyof TObj]?: TObj[Property]};

const x: MyOptional<MyInterface> = {}
const y: MyOptional<MyInterface> = { propA: 'hello', propB: 123 }

export {}
