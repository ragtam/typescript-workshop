class MyClass<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    public logType(type: T): void {
        console.log(type);
    }

    public getArrayOfType(): T[] {
        return [this.value];
    }
}

const obj = new MyClass('some string value');
obj.logType('hello world');
// @ts-expect-error
obj.logType(1);
const r = obj.getArrayOfType();

const obj2 = new MyClass(true);
obj2.logType(false);
// @ts-expect-error
obj.logType(123);
const r2 = obj2.getArrayOfType();

export {}