// 1. refactor MyClass in a way that when instantiated with a selected value type, it was possible to use this type only.
// e.g When string was passed in constructor, methods handle strings only.

class MyClass {
    private value: any;

    constructor(value: any) {
        this.value = value;
    }

    public logType(type: any): void {
        console.log(type);
    }

    public getArrayOfType(): any[] {
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