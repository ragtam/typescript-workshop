// 1. write a function that:
// - if provided with number, adds value from config to it
// - if provided with string, makes it uppercase and adds a suffix from config
// - if provided with boolean, returns its negation

interface Config {
    valueToAdd?: number;
    suffix?: string;
}

function foo(value: number | string | boolean, config?: Config): number | string | boolean {
    return 'implementation goes here';
}

describe('union type, different actions', () => {
    it('should add value from config if value is a number', () => {
        expect(foo(1, { valueToAdd: 2 })).toEqual(3);
    })

    it('should make a string uppercase', () => {
        expect(foo("Hello World", { suffix: '!!!' })).toEqual('HELLO WORLD!!!');
    })

    it('should negate if boolean', () => {
        expect(foo(true)).toEqual(false);
    })
})