interface MyInterface {
    name: string;
    value: number;
}

type MyPick<TObj, KProp extends keyof TObj> = { [Property in KProp]: TObj[Property] };

const originalPick: Pick<MyInterface, 'name'> = { name: 'original pick' };

const myPick: MyPick<MyInterface, 'name'> = { name: 'my pick' };

export {};
