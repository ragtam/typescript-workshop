interface MyInterface {
    name: string;
    value: number;
}

type MyPick = any;

const originalPick: Pick<MyInterface, 'name'> = { name: 'original pick' };

const myPick: MyPick<MyInterface, 'name'> = { name: 'my pick' };

export {}
