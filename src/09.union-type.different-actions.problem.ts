// 1. write a function that:
// - if provided with number, adds +1 to it
// - if provided with string, makes it uppercase
// - if provided with boolean, returns its negation

// return value of a function is number | string | boolean

function foo(value: number | string | boolean): number | string | boolean {
    return 'implementation';
}

describe('union type, different actions', () => {
    it('should add +1 if value is a number', () => {
        const res = foo(1);
        expect(res).toEqual(2);
    });

    it('should make a string uppercase', () => {
        const res = foo('Hello World');
        expect(res).toEqual('HELLO WORLD');
    });

    it('should negate if boolean', () => {
        const res = foo(true);
        expect(res).toEqual(false);
    });
});

export {};
