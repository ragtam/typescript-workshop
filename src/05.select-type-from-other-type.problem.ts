// 1. Refactor TypeOfPropA type so that propA type from MyInterface was connected to TypeOfPropA

interface MyInterface {
    propA: number;
    propB: boolean;
}

type TypeOfPropA = number;

const x: TypeOfPropA = 1;

export {}