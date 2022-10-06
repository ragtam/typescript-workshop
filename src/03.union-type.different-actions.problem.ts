// 1. write a function that:
// - if provided with number, adds +1 to it
// - if provided with string, makes it uppercase
// - if provided with boolean, returns its negation

function doSomeMagic(value: number | string | boolean): number | string | boolean {
    return 'implementation goes here';
}

describe('union type, different actions', () => {
    it('should add +1 if value is a number', () => {
        expect(doSomeMagic(1)).toEqual(2);
    })

    it('should make a string uppercase', () => {
        expect(doSomeMagic("Hello World")).toEqual('HELLO WORLD');
    })

    it('should negate if boolean', () => {
        expect(doSomeMagic(true)).toEqual(false);
    })
})